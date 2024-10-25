import React from "react";
import {BookInfo} from "./BookInfo";


export function BookCatalog({books}){
    return (
        <div id='book-catalog'>
            {books.map(books => BookInfo(books))}
        </div>
    );
}



