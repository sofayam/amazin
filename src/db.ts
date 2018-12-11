import * as sqlite3 from "sqlite3";
import * as path from "path";

let db: sqlite3.Database;

export function setup() {
    const dbpath = path.join(__dirname, "../metadata.db");
    db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY);


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

