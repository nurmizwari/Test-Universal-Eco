const initialState = {
  item: [],
  itemById: {},
};

function itemReducer(state = initialState, action) {
  switch (action.type) {
    case "fetchData":
      return { ...state, item: action.payload };
    case "fetchDataById":
      return { ...state, itemById: action.payload };
    case "editDataById":
      return { ...state };
    default:
      return state;
  }
}

export default itemReducer;
