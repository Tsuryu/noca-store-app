import { types } from "./actions";

const initialState = {
  user: {
  }, 
  appMessage: {
    type: "danger",
    text: undefined
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

  if (action.type === types.SHOW_MESSAGE) {
    const appMessage = {type: action.payload.type, text: action.payload.text}
    return {
      ...state,
      appMessage 
    };
  }

  return state;
};

export default reducer;
