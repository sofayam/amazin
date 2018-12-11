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
function authors() {
    return new Promise((resolve) => {
        db.all("select name from authors", [], (err, rows) => {
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
//# sourceMappingURL=db.js.map