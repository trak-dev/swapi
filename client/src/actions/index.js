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
export const getUrls = (cathegory) => async (dispatch) => {
  try {
    const { data } = await api.fetchUrls(cathegory);
    dispatch({ type: FETCH_MORE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export default getAll;
