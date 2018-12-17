import * as sqlite3 from "sqlite3";
import * as path from "path";
import { listenerCount } from "cluster";

let db: sqlite3.Database;


export function setup() {
    const dbpath = path.join(__dirname, "../metadata.db");
    db = new sqlite3.Database(dbpath, sqlite3.OPEN_READONLY);


}

export async function authors(hint?: string): Promise<Array<any>> {
    let qry = "select name, id from authors";
    if (hint) {
        qry += " where name like '%" + hint + "%'"; 
    }
    const res = await aaall(qry) as any[];
    return res;
}

export async function books(hint?: string) {
    let qry = "select title, author_sort, books.id as bookid, books_authors_link.author \
    as authorid from books_authors_link inner join books where ";
    if (hint) {
        qry += "  title like '%" + hint + "%' and "
    }
    qry +=  " books_authors_link.book = books.id "; 
    const res = await aaall(qry)
    return res;
}


export async function author(id: string) {
    let nameqry = "select name from authors where id =  " +  id;
    
    const nameres = await aaall(nameqry);

    let booksqry = "select books.title as title, books.id as id from books_authors_link  \
    inner join books where books.id = books_authors_link.book \
    and books_authors_link.author = " + id;

    const booksres =  await aaall(booksqry);

    return { name: nameres[0].name, books: booksres} ;

}

export async function book(id: string) {
    let qry = "select title, author_sort, id from books where id =  " +  id;
    
    const res = await aaall(qry);

    let commqry = "select text from comments where book = " + id;

    const comm =  await aaall(commqry) as Array<any>;
    let comment = "No comment"
    if (comm.length > 0) {
        comment = comm[0].text;
    }
    let book = res[0];
    book.comment = comment;
    return book;

}

function aaall (query: string, params?: any) {
    return new Promise(function(resolve, reject) {
        if(params == undefined) params=[]

        db.all(query, params, function(err, rows)  {
            if(err) reject("Read error: " + err.message)
            else {
                resolve(rows)
            }
        })
    }) 
}
