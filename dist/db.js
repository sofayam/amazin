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
function authors(hint) {
    let qry = "select name, id from authors";
    if (hint) {
        qry += " where name like '%" + hint + "%'";
    }
    return new Promise((resolve) => {
        db.all(qry, [], (err, rows) => {
            if (err) {
                resolve([]);
            }
            else {
                resolve(rows);
            }
        });
    });
}
exports.authors = authors;
function books(hint) {
    let qry = "select title, author_sort, id from books";
    if (hint) {
        qry += " where title like '%" + hint + "%'";
    }
    return new Promise((resolve) => {
        db.all(qry, [], (err, rows) => {
            if (err) {
                resolve([]);
            }
            else {
                resolve(rows);
            }
        });
    });
}
exports.books = books;
//# sourceMappingURL=db.js.map