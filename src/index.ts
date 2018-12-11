import * as express from "express";
import * as path from "path";
var app = express();

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");

app.get('/', function (req, res) {
  res.render("hello", { param: "world"});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
