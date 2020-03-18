import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { submitContactData } from "../actions";
import RenderError from "./RenderError";

const EventCreateContacts = props => {
  const [ownerName, setOwnerName] = useState(props.contactData.ownerName);
  const [desc, setDesc] = useState(props.contactData.desc);
  const [errors, setErrors] = useState("");

  const onOwnerNameChange = e => {
    setOwnerName(e.target.value);
  };

  const onDescChange = e => {
    setDesc(e.target.value);
  };

  const handleNext = () => {
    const contactError = validate();
    if (!contactError) {
      props.submitContactData({
        ownerName,
        desc
      });

      props.history.push("/event/create/finish");
    } else {
      setErrors(contactError);
    }
  };

  const validate = () => {
    let errors = "";
    if (!ownerName.trim()) {
      errors = errors + " You must enter owner name.";
    }

    if (!desc.trim()) {
      errors = errors + " You must enter event description.";
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
            <span className="process-flow__span">3</span> Finish
          </div>
          <div className="process-flow__contactsMarker"></div>
        </div>
        <div className="event-wizard__main">
          <label className="event-owner__label" htmlFor="event-owner">
            Event Owner Name
          </label>
          <input
            onChange={onOwnerNameChange}
            value={ownerName}
            type="text"
            className="form-control"
            id="event-owner"
          />

          <label className="event-desc__label" htmlFor="event-desc">
            Event description
          </label>
          <textarea
            onChange={onDescChange}
            value={desc}
            type="text"
            className="form-control"
            id="event-desc"
            rows="3"
          />
        </div>

        <button
          onClick={handleNext}
          className="btn btn-primary next-to__finnish"
        >
          Next
        </button>

        <Link to="/event/create/basic">
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
  return { contactData: state.eventFormData.contactData };
};

export default connect(mapStateToProps, { submitContactData })(
  EventCreateContacts
);
