import { FETCH_ALL } from "../Constants/actionTypes";
import * as api from "../api/index.js";

export const getAll = (cathegory) => async (dispatch) => {
  try {
    const { data } = await api.fetchCathegory(cathegory);
    dispatch({ type: FETCH_ALL, payload: { swapidata: data } });
  } catch (error) {
    console.log(error);
  }
};
export default getAll;
