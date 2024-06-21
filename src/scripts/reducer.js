const reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case "DECREMENT_RED":
      newState = {
        ...state,
        red: state.red - 1,
      };
      break;
    case "DECREMENT_GREEN":
      newState = {
        ...state,
        green: state.green - 1,
      };
      break;
    case "DECREMENT_BLUE":
      newState = {
        ...state,
        blue: state.blue - 1,
      };
      break;
    case "DECREMENT_ALPHA":
      newState = {
        ...state,
        alpha: state.alpha - 1,
      };
      break;
    case "INCREMENT_RED":
      newState = {
        ...state,
        red: state.red + 1,
      };
      break;
    case "INCREMENT_GREEN":
      newState = {
        ...state,
        green: state.green + 1,
      };
      break;
    case "INCREMENT_BLUE":
      newState = {
        ...state,
        blue: state.blue + 1,
      };
      break;
    case "INCREMENT_ALPHA":
      newState = {
        ...state,
        alpha: state.alpha + 1,
      };
      break;
    default:
      return state;
  }

  sessionStorage.setItem("state", JSON.stringify(newState));
  return newState;
};

export default reducer;
