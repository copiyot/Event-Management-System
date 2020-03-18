import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import fetchEvents from "./api/fetchEvents";
import Calender from "./Calender";

const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedEvents = fetchEvents();

    // sort storedEvents based on startDate
    const sortedEvents = storedEvents.sort(searchComparator);

    setEvents(sortedEvents);
  }, []);

  const searchComparator = (e1, e2) => {
    if (e1.startDate > e2.startDate) {
      return 1;
    }
    if (e1.startDate < e2.startDate) {
      return -1;
    }

    return 0;
  };

  const searchEvents = () => {
    const searchedEvents = events.filter(e =>
      e.eventTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setEvents(searchedEvents);
  };

  const renderEvent = event => (
    <tr key={event.ID}>
      <th scope="row">{event.ID}</th>
      <td>
        <Link key={event.ID} to={`/events/${event.ID}`}>
          <div className="">{event.eventTitle}</div>
          <div className="">{`${event.startDate} - ${event.endDate}`}</div>
        </Link>
      </td>
      <td>{event.startDate}</td>
    </tr>
  );

  return (
    <div className="container event-listing">
      <div className="card">
        <div className="p-3">
          <form className="form-inline my-2 my-lg-0">
            <input
              value={searchTerm}
              onChange={e => {
                setSearchTerm(e.target.value);
                searchEvents();
              }}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-md btn-outline-info my-sm-0"
              type="button"
              // onClick={searchEvents}
            >
              Search Events
            </button>
          </form>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Event</th>
              <th scope="col">Event Date</th>
            </tr>
          </thead>
          <tbody>
            {events.length > 0 ? events.map(e => renderEvent(e)) : null}
          </tbody>
        </table>
      </div>

      <div className="card mt-5">
        <Calender />
      </div>
    </div>
  );
};

export default EventsList;
