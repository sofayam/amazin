import * as sqlite3 from "sqlite3";
import * as path from "path";

let db: sqlite3.Database;

export function setup() {
    const dbpath = path.join(__dirname, "../metadata.db");
    db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY);


}

export function authors(hint?: string): Promise<any> {
    let qry = "select name, id from authors";
    if (hint) {
        qry += " where name like '%" + hint + "%'"; 
    }
    return new Promise<any>((resolve) => {
        db.all(qry, [], (err, rows) => {
            if (err) {
                resolve([]);
            } else {
                resolve(rows)
            }
        });
    })
}

export function books(hint?: string): Promise<any> {
    let qry = "select title, author_sort, id from books";
    if (hint) {
        qry += " where title like '%" + hint + "%'"; 
    }
    return new Promise<any>((resolve) => {
        db.all(qry, [], (err, rows) => {
            if (err) {
                resolve([]);
            } else {
                resolve(rows)
            }
        });
    })
}
