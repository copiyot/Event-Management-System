export default () => {
  const dataIDs = JSON.parse(localStorage.getItem("eventDataIDs"));

  return dataIDs.map(event => {
    const { eventTitle, startDate, endDate } = JSON.parse(
      localStorage.getItem(event)
    ).basicData;

    const ID = event.split("-")[1];
    return { ID, eventTitle, startDate, endDate };
  });
};
