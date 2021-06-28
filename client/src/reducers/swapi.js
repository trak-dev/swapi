import { FETCH_ALL } from "../Constants/actionTypes";

const reducer = (swapidata = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    default:
      return swapidata;
  }
};
export default reducer;
