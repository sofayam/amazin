import * as express from "express";
import * as path from "path";
import * as db from "./db";
var app = express();

db.setup();

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");

app.get('/', async function (req, res) {

  res.render("index");
});

app.get('/authors', async function (req, res) {
  let hint;
  if (req.query && req.query.qry) hint = req.query.qry;
  let authors = await db.authors(hint);
  res.render("authors", { authors });
});

app.get('/books', async function (req, res) {
  let hint;
  if (req.query && req.query.qry) hint = req.query.qry;
  let books = await db.books(hint);
  res.render("books", { books });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
