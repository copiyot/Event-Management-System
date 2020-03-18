export const submitBasicData = basicData => {
  return {
    type: "BASIC_DATA",
    payload: basicData
  };
};

export const submitContactData = contactData => {
  return {
    type: "CONTACT_DATA",
    payload: contactData
  };
};

export const submitFinishData = finishData => {
  return {
    type: "FINISH_DATA",
    payload: finishData
  };
};

export const resetFormDataStore = () => {
  return {
    type: "RESET_FORM"
  };
};
