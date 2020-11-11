import express from "express";
import routes from "./src/routes";

const port = 3001;
const app = express();

app.use("/", routes);
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", `http://localhost:${port}`);
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
