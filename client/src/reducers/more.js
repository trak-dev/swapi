import { FETCH_MORE } from "../Constants/actionTypes";

const reducer = (moredata = ["test"], action) => {
  switch (action.type) {
    case FETCH_MORE:
      return action.paylaod;
    default:
      return moredata;
  }
};
export default reducer;
