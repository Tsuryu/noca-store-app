import { types } from "./actions";

const initialState = {
  user: {
    username: "sergio",
    lastName: "velazquez"
  }
};

const reducer = (state = initialState, action) => {
  if (action.type === types.LOGIN) {
    const user = {...state.user};
    user.username = action.payload.username ? action.payload.username : state.user.username;
    user.password = action.payload.password ? action.payload.password : state.user.password;
    return {
      ...state,
      user
    };
  }

  return state;
};

export default reducer;