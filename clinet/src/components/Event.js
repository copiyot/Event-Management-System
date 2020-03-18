import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Game from "../pics/gamepark.jpeg";
import kilimanjaro from "../pics/kilimanjaro.jpeg";
import Sunrise from "../pics/sunrise.jpeg";

const Event = props => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const eventID = `event-${props.match.params.id}`;
    const fetchedEvent = JSON.parse(localStorage.getItem(eventID));
    setEvent(fetchedEvent);
  }, []);

  return (
    <div className="container event-listing">
      <div className="card p-2">
        {!event ? null : (
          <>
            <div className="card-header event-owner__eventName">
              <div className="title-owner">
                {`${event.basicData.eventTitle} - ${event.contactData.ownerName}`}
              </div>

              <Link to={`/event/edit/basic/${props.match.params.id}`}>
                <span className="edit-event">
                  <label className="edit-icon__label" htmlFor="edit-icon">
                    Edit Event
                  </label>
                  <button className="ui icon button">
                    <i className="edit outline icon"></i>
                  </button>
                </span>
              </Link>
            </div>

            <div className="desc-listing">
              <div className="event-desc__details">
                <div className="desc-label"> Event Description </div>
                <p className="desc">{event.contactData.desc}</p>
              </div>

              <div className="attend-listing">
                <div className="att-label">Attendees</div>
                <table className="table table-hover">
                  <thead className="att-list__headers">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Registration Date</th>
                      <th scope="col">Share Invite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Leo Wanyama</td>
                      <td>23-04-2020 23:15</td>
                      <td>
                        <button className="share-button ui icon button">
                          <i className="share square icon"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>John Njoroge</td>
                      <td>24-04-2020 20:30</td>
                      <td>
                        <button className="share-button ui icon button">
                          <i className="share square icon"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="date-location">
              <div className="location">
                <div className="location-label">Location</div>
                <div className="location-name">{event.finishData.location}</div>
              </div>
              <div className="startDate">
                <div className="startDate__label">Start Date</div>
                <div className="startDate__value">
                  {event.basicData.startDate}
                </div>
              </div>
              <div className="endDate">
                <div className="endDate__label">End Date</div>
                <div className="endDate__value">{event.basicData.endDate}</div>
              </div>
            </div>

            <div className="event-pics">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block h-100 w-100"
                      src={Game}
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block h-100 w-100"
                      src={kilimanjaro}
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block h-100 w-100"
                      src={Sunrise}
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>

            <div className="event-share__buttons">
              <div className="u-contacts mt-5">
                <div className="u-contacts-item">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div className="u-contacts-item">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="u-contacts-item">
                  <i className="fab fa-instagram"></i>
                </div>
                <div className="u-contacts-item">
                  <i className="fab fa-whatsapp"></i>
                </div>
              </div>
            </div>

            <div className="comoments">
              <div className="comments-label">COMMENTS</div>

              <div className="ui very relaxed list">
                <div className="item">
                  <img className="ui avatar image" src={Game} />
                  <div className="content">
                    <a className="header">John Njoroge</a>
                    <div className="description">
                      Best experience of my life
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img className="ui avatar image" src={kilimanjaro} />
                  <div className="content">
                    <a className="header">Thanos stark</a>
                    <div className="description">
                      It was an okay better than I expected.
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img className="ui avatar image" src={Sunrise} />
                  <div className="content">
                    <a className="header">John Mpenda Amani</a>
                    <div className="description">
                      Ilikuwa moto kama pasi. Nayo nayo majama
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Event;
