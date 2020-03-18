export default eventData => {
  if (eventData) {
    if (!localStorage.getItem("eventID")) {
      localStorage.setItem("eventID", "0");
    }
    const eventID = parseInt(localStorage.getItem("eventID")) + 1;

    let eventDataIDs = [];
    if (localStorage.getItem("eventDataIDs")) {
      eventDataIDs = JSON.parse(localStorage.getItem("eventDataIDs"));
    }

    let eventDates = [];
    if (localStorage.getItem("eventDates")) {
      eventDates = JSON.parse(localStorage.getItem("eventDates"));
    }

    if (eventID) {
      localStorage.setItem(`event-${eventID}`, JSON.stringify(eventData));
      localStorage.setItem("eventID", `${eventID}`);
      eventDataIDs.push(`event-${eventID}`);
      localStorage.setItem("eventDataIDs", JSON.stringify(eventDataIDs));
      eventDates.push({
        EndTime: `${eventData.basicData.endDate}`,
        StartTime: `${eventData.basicData.startDate}`
      });
      localStorage.setItem("eventDates", JSON.stringify(eventDates));
    }
  }
};
