import express from "express";
import redirect from "./routes/index.js";
import cors from "cors";
const app = express();
//selecetion port
const port = process.env.PORT || 5000;
app.use(cors());

app.use("/", redirect);
// lancement serveur
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
