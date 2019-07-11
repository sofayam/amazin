"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3 = require("sqlite3");
const path = require("path");
let db;
function setup() {
    const dbpath = path.join(__dirname, "../metadata.db");
    db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY);
}
exports.setup = setup;
async function authors(hint) {
    let qry = "select name, id from authors";
    if (hint) {
        qry += " where name like '%" + hint + "%'";
    }
    const res = await aaall(qry);
    return res;
}
exports.authors = authors;
async function books(hint) {
    let qry = "select title, author_sort, books.id as bookid, books_authors_link.author \
    as authorid from books_authors_link inner join books where ";
    if (hint) {
        qry += "  title like '%" + hint + "%' and ";
    }
    qry += " books_authors_link.book = books.id ";
    const res = await aaall(qry);
    return res;
}
exports.books = books;
async function author(id) {
    let nameqry = "select name from authors where id =  " + id;
    const nameres = await aaall(nameqry);
    let booksqry = "select books.title as title, books.id as id from books_authors_link  \
    inner join books where books.id = books_authors_link.book \
    and books_authors_link.author = " + id;
    const booksres = await aaall(booksqry);
    return { name: nameres[0].name, books: booksres };
}
exports.author = author;
async function book(id) {
    let qry = "select title, author_sort, id from books where id =  " + id;
    const res = await aaall(qry);
    let commqry = "select text from comments where book = " + id;
    const comm = await aaall(commqry);
    let comment = "No comment";
    if (comm.length > 0) {
        comment = comm[0].text;
    }
    let book = res[0];
    book.comment = comment;
    return book;
}
exports.book = book;
function aaall(query, params) {
    return new Promise(function (resolve, reject) {
        if (params == undefined)
            params = [];
        db.all(query, params, function (err, rows) {
            if (err)
                reject("Read error: " + err.message);
            else {
                resolve(rows);
            }
        });
    });
}
//# sourceMappingURL=db.js.map