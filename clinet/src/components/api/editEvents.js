export default (eventId, eventData) => {
    localStorage.setItem(`${eventId}`, JSON.stringify(eventData));
  };