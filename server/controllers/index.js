import express from "express";
import fetch from "node-fetch";
const router = express.Router();

// recherche de toutes les données d'une cathégorie
export const getSearch = async (req, res) => {
  const { cathegory } = req.params;
  try {
    let response = await fetch("https://swapi.dev/api/" + cathegory);
    let data = await response.json();
    let arr = [];
    arr.push(data);
    let tmp = { next: data.next };
    //l'api ne rend que 10 resultats a la fois donc il faut loop jusqua avoir tout et le push dans un array
    while (tmp.next !== null) {
      response = await fetch(tmp.next);
      tmp = await response.json();
      arr.push(tmp);
    }
    res.json(arr);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getGlobal = async (req, res) => {
  const cathegory = req.params.cathegory;
  const search = req.params.search;
  try {
    // si la rechrche est une int -> afficher la recherche par id (resultat unique donc)
    if (!isNaN(parseInt(search))) {
      let response = await fetch(
        "https://swapi.dev/api/" + cathegory + "/" + search
      );
      let data = await response.json();
      res.json(data);
    } else {
      //sinon effectuer la recherche grace a la recherche implementee par l'api
      let response = await fetch(
        "https://swapi.dev/api/" + cathegory + "/?search=" + search
      );
      let data = await response.json();
      let arr = [];
      arr.push(data);
      let tmp = { next: data.next };
      //l'api ne rend que 10 resultats a la fois donc il faut loop jusqua avoir tout et le push dans un array
      while (tmp.next !== null) {
        response = await fetch(tmp.next);
        tmp = await response.json();
        arr.push(tmp);
      }
      res.json(arr);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
