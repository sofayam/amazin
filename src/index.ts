import * as express from "express";
import * as path from "path";
import * as db from "./db";
var app = express();

db.setup();

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");

app.get('/', async function (req, res) {
  let authors = await db.authors();
  res.render("hello", { param: "world", authors});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
