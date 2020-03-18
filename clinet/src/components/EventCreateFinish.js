import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { submitFinishData, resetFormDataStore } from "../actions";
import RenderError from "./RenderError";
import persistence from "./api/persistence";

const EventCreateFinnish = props => {
  const [location, setLocation] = useState(props.finishData.location);
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState("");

  const onLacationChange = e => {
    setLocation(e.target.value);
  };

  const onSetImage = e => {
    setImage(e.target.value);
  };

  const handleFinnish = () => {
    const finnishError = validate();

    if (!finnishError) {
      props.submitFinishData({
        location,
        image
      });

      // store data in local storage
      persistence(props.eventData);
      // reset form data in store
      props.resetFormDataStore();
      // redirect to events listing
      props.history.push("/events");
    } else {
      setErrors(finnishError);
    }
  };

  const validate = () => {
    let errors = "";
    if (!location.trim()) {
      errors = errors + " You must enter a location.";
    }

    return errors;
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
            <span className="process-flow__spanContact">2</span> Name and
            Description
          </div>
          <div className="finnish-title">
            <span className="process-flow__spanFinish">3</span> Finish
          </div>
          <div className="process-flow__finnishMarker"></div>
        </div>
        <div className="event-wizard__main">
          <label className="event-owner__label" htmlFor="event-owner">
            Location of the Event
          </label>
          <input
            onChange={onLacationChange}
            type="text"
            className="form-control"
            id="event-owner"
          />

          <label htmlFor="upload-button" className="upload-label">
            Upload Event Pics
          </label>
          <form id="upload-button">
            <div className="form-group">
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>
          </form>
        </div>

        <button
          onClick={handleFinnish}
          className="btn btn-primary finish-button"
        >
          Finish
        </button>
        <Link to="/event/create/contacts">
          <button className="btn btn-primary next-to__contacts">
            Previous
          </button>
        </Link>
        {errors ? <RenderError error={errors} /> : null}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    finishData: state.eventFormData.finishData,
    eventData: state.eventFormData
  };
};

export default connect(mapStateToProps, {
  submitFinishData,
  resetFormDataStore
})(EventCreateFinnish);
