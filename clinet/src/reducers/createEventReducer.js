const INITIAL_STATE = {
  basicData: {
    startDate: new Date(),
    endDate: new Date(),
    eventTitle: "",
    maxAttend: 0
  },
  contactData: { ownerName: "", desc: "" },
  finishData: { location: "" }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "BASIC_DATA":
      return { ...state, basicData: action.payload };

    case "CONTACT_DATA":
      return { ...state, contactData: action.payload };

    case "FINISH_DATA":
      return { ...state, finishData: action.payload };
    case "RESET_FORM":
      return {
        ...state,
        basicData: INITIAL_STATE.basicData,
        contactData: INITIAL_STATE.contactData,
        finishData: INITIAL_STATE.finishData
      };
    default:
      return state;
  }
};
