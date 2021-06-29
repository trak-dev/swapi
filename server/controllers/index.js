import express from "express";
import fetch from "node-fetch";
const router = express.Router();

export const getSearch = async (req, res) => {
  const { cathegory } = req.params;
  try {
    let response = await fetch("https://swapi.dev/api/" + cathegory);
    let data = await response.json();
    let arr = [];
    arr.push(data);
    let tmp = { next: data.next };
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
    if (!isNaN(parseInt(search))) {
      let response = await fetch(
        "https://swapi.dev/api/" + cathegory + "/" + search
      );
      let data = await response.json();
      res.json(data);
    } else {
      let response = await fetch(
        "https://swapi.dev/api/" + cathegory + "/?search=" + search
      );
      let data = await response.json();
      let arr = [];
      arr.push(data);
      let tmp = { next: data.next };
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
