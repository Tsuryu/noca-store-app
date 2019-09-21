export const types = {
  LOGIN: "LOGIN",
  SHOW_MESSAGE: "SHOW_MESSAGE",
  HANDLE_INPUT_CHANGE: "HANDLE_INPUT_CHANGE"
};

export const handleInputChange = (object) => {
  return {
    type: types.HANDLE_INPUT_CHANGE,
    payload: object
  };
};

export const showMessage = (message) => {
  return {
    type: types.SHOW_MESSAGE,
    payload: message
  };
};
