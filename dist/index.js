"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const db = require("./db");
var app = express();
db.setup();
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");
app.get('/', function (req, res) {
    let authors = db.authors();
    res.render("hello", { param: "world", authors });
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=index.js.map