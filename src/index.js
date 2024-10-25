import React from "react";
import { createRoot } from "react-dom/client";
import { BookCatalog } from "./components/BookCatalog";
import { BookFilter } from "./components/BookFilter";
import {BookAdd} from "./components/BookAdd";
import './main.css'

let books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        category: "Fiction",
        description: "A powerful novel about racial injustice and moral growth in the American South, seen through the eyes of a young girl."
    },
    {
        title: "1984",
        author: "George Orwell",
        category: "Dystopian",
        description: "A dystopian classic that explores totalitarianism and mass surveillance in a society controlled by an omnipresent government."
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "Classic",
        description: "A story of love, wealth, and the American Dream, set in the Roaring Twenties, centered around the mysterious Jay Gatsby."
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        category: "Romance",
        description: "A beloved romance novel about Elizabeth Bennet and Mr. Darcy, exploring themes of social class, family, and personal growth."
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        category: "Fantasy",
        description: "A fantastical adventure of Bilbo Baggins as he embarks on a journey to help dwarves reclaim their homeland from a dragon."
    }
];

let filteredBooks = books;
function App() {
    const handleFilter = (category) => {
        if (category === "all") {
            filteredBooks = books;
        } else {
            filteredBooks = books.filter(book => book.category === category);
        }
        console.log(category)
        console.log(filteredBooks)
        renderApp();
    };

    const handleAddBook = (newBook) => {
        books.push(newBook);
        filteredBooks = books;
        renderApp();
    };

    return (
        <div id="main">
            <div id='adjust'>
            <BookFilter onFilter={handleFilter} />
            <BookCatalog books={filteredBooks} />
            </div>
            <BookAdd onAddBook={handleAddBook} />
        </div>
    );
}

const renderApp = () => {
    const root = createRoot(document.getElementById("root"));
    console.log(books)
    root.render(<App />);
};

renderApp();