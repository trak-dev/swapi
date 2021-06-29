import { FETCH_ALL } from "../Constants/actionTypes";
import * as api from "../api/index.js";

//appel de l'api et du reducer pour récupérer les données
export const getAll = (cathegory) => async (dispatch) => {
  try {
    const { data } = await api.fetchCathegory(cathegory);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export default getAll;
