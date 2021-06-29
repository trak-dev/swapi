import { FETCH_MORE } from "../Constants/actionTypes";

const reducer = (moredata = [], action) => {
  switch (action.type) {
    case FETCH_MORE:
      return action.paylaod;
    default:
      return moredata;
  }
};
export default reducer;
