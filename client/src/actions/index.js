import { FETCH_ALL, FETCH_MORE } from "../Constants/actionTypes";
import * as api from "../api/index.js";

export const getAll = (cathegory) => async (dispatch) => {
  try {
    const { data } = await api.fetchCathegory(cathegory);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getMore = (cathegory, search) => async (dispatch) => {
  try {
    const { data } = await api.fetchMoreCathegory(cathegory, search);
    dispatch({ type: FETCH_MORE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export default getAll;
