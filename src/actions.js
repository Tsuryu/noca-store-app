export const types = {
  LOGIN: "LOGIN",
  SHOW_MESSAGE: "SHOW_MESSAGE"
};

export const login = (user) => {
  return {
    type: types.LOGIN,
    payload: user
  };
};

export const showMessage = (message) => {
  return {
    type: types.SHOW_MESSAGE,
    payload: message
  };
};