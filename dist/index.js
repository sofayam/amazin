"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const db = require("./db");
var app = express();
db.setup();
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");
app.get('/', async function (req, res) {
    res.render("index");
});
app.get('/authors', async function (req, res) {
    let hint;
    if (req.query && req.query.qry)
        hint = req.query.qry;
    let authors = await db.authors(hint);
    res.render("authors", { authors });
});
app.get('/books', async function (req, res) {
    let hint;
    if (req.query && req.query.qry)
        hint = req.query.qry;
    let books = await db.books(hint);
    res.render("books", { books });
});
app.get('/author', async function (req, res) {
    let id;
    if (req.query && req.query.qry)
        id = req.query.qry;
    let { name, books } = await db.author(id);
    res.render("author", { name, books });
});
app.get('/book', async function (req, res) {
    let id;
    if (req.query && req.query.qry)
        id = req.query.qry;
    let book = await db.book(id);
    res.render("book", { book });
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=index.js.map