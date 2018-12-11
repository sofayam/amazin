"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3 = require("sqlite3");
let db;
function setup() {
    db = new sqlite3.Database("../metadata.db", sqlite3.OPEN_READONLY);
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