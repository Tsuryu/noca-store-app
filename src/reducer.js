import { types } from "./actions";

const initialState = {
  user: {
  }, 
  appMessage: {
    type: "danger",
    text: undefined
  },
  signupFormUser:{}
};

const reducer = (state = initialState, action) => {
  if (action.type === types.HANDLE_INPUT_CHANGE) {
    const formName = Object.keys(action.payload)[0];
    const inputValue = action.payload[formName];
    const auxForInput = {};
    auxForInput[formName] =  {...state[formName], ...inputValue};
    
    return {
      ...state,
      ...auxForInput
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
