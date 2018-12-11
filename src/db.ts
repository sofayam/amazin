import * as sqlite3 from "sqlite3";

let db: sqlite3.Database;

export function setup() {
    db = new sqlite3.Database("../metadata.db", sqlite3.OPEN_READONLY);


}

export function authors(): Promise<any> {
    return new Promise<any>((resolve) => {
        db.all("select name from authors", [], (err, rows) => {
            if (err) {
                resolve([]);
            } else {
                resolve(rows)
            }
        });
    })
}

