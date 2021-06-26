import express from "express";
import { getSearch, getGlobal } from "../controllers/index.js";
const router = express.Router();

router.get("/:cathegory", getSearch);
router.get("/:cathegory/:search", getGlobal);

export default router;
