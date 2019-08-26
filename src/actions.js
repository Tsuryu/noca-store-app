export const types = {
  LOGIN: "LOGIN"
};

export const login = (user) => {
  return {
    type: types.LOGIN,
    payload: user
  };
};