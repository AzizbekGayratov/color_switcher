const initialState = JSON.parse(sessionStorage.getItem("state")) || {
  red: 0,
  green: 0,
  blue: 0,
  alpha: 100,
};

export default initialState;
