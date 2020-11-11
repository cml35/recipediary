import express from "express";
import routes from "./src/routes";

const port = 9090;

const app = express();
app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
