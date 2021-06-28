import express from "express";
import redirect from "./routes/index.js";
const app = express();
const port = process.env.PORT || 5000;

app.use("/", redirect);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
