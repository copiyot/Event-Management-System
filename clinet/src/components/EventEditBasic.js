import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { submitBasicData } from "../actions";
import RenderError from "./RenderError";

const EventEditBasic = props => {
  const [startDate, setStartDate] = useState(props.basicData.startDate);
  const [endDate, setEndDate] = useState(props.basicData.endDate);
  const [eventTitle, setEventTitle] = useState(props.basicData.eventTitle);
  const [maxAttend, setMaxAttend] = useState(props.basicData.maxAttend);
  const [basicErrors, setBasicErrors] = useState("");

  useEffect(() => {
    initialValues();
  }, []);

  const initialValues = () => {
    const prev = props.location.prevProps;
    if (prev !== "previous") {
      const eventID = `event-${props.match.params.id}`;
      const { basicData } = JSON.parse(localStorage.getItem(eventID));
      setEventTitle(basicData.eventTitle);
      setMaxAttend(basicData.maxAttend);
      setStartDate(new Date(basicData.startDate));
      setEndDate(new Date(basicData.endDate));
    }
  };

  // Bind Inputs
  const onEventTitleChange = e => {
    setEventTitle(e.target.value);
  };

  const onMaxAttendChange = e => {
    const value = parseInt(e.target.value);
    if (value) {
      setMaxAttend(value);
    } else {
      setMaxAttend(0);
    }
  };

  // Validating Input Data
  const validate = () => {
    let errors = "";
    if (!eventTitle.trim()) {
      errors = errors + " You must enter event title.";
    }

    if (maxAttend < 1) {
      errors = errors + " Number of attendees should be more than zero";
    }

    return errors;
  };

  // Handle Basic Data Inputs
  const handleNext = () => {
    const errors = validate();

    if (errors) {
      setBasicErrors(errors);
      //alert(errors);
    } else {
      props.submitBasicData({
        eventTitle,
        maxAttend,
        startDate,
        endDate
      });
    }
  };

  return (
    <div className="event-create__main">
      <div className="creation-wizard__title">Event Creation Wizard</div>
      <div className="creation-wizard">
        <div className="process-flow">
          <div className="basic-data__title">
            <span className="process-flow__spanBasic">1</span> Basic Data
          </div>
          <div className="contacts-description__title">
            <span className="process-flow__span">2</span> Name and Description
          </div>
          <div className="finnish-title">
            <span className="process-flow__span">3</span> Finish
          </div>
          <div className="process-flow__basicMarker"></div>
        </div>
        <div className="event-wizard__main">
          <label className="event-title__label" htmlFor="event-title">
            Event Title
          </label>
          <input
            onChange={onEventTitleChange}
            value={eventTitle}
            type="text"
            className="form-control"
            id="event-title"
          />

          <div className="event-dates">
            <div className="start-date">
              <label className="start-date__label" htmlFor="start-date__picker">
                Starting date and time
              </label>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                id="start-date__picker"
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </div>
            <div className="end-date">
              <label className="end-date__label" htmlFor="end-date__picker">
                Completion date and time
              </label>
              <DatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                id="end-date__picker"
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </div>
          </div>

          <label className="max-att__label" htmlFor="max-att__input">
            Maximum number of attendees
          </label>
          <input
            onChange={onMaxAttendChange}
            value={maxAttend}
            type="text"
            className="form-control"
            id="max-att__input"
          />
        </div>
        <Link to={`/event/edit/contacts/${props.match.params.id}`}>
          <button
            onClick={handleNext}
            className="btn btn-primary next-to__contacts"
          >
            Next
          </button>
        </Link>

        {basicErrors ? <RenderError error={basicErrors} /> : null}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    basicData: state.eventFormData.basicData
  };
};

export default connect(mapStateToProps, { submitBasicData })(EventEditBasic);
