import React from "react";

export function BookAdd({ onAddBook }) {
    let titleRef = null;
    let authorRef = null;
    let categoryRef = null;
    let descriptionRef = null;

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBook = {
            title: titleRef.value,
            author: authorRef.value,
            category: categoryRef.value,
            description: descriptionRef.value
        };

        // Przekazujemy nową książkę do funkcji przekazanej przez rodzica
        onAddBook(newBook);

        // Oczyszczamy formularz
        e.target.reset();
    };

    return (
        <div id="add-book">
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input id="title" type="text" name="title" ref={(el) => titleRef = el} placeholder="Enter Title" /><br />

                <label htmlFor="author">Author: </label>
                <input id="author" type="text" name="author" ref={(el) => authorRef = el} placeholder="Enter Author" /><br />

                <label htmlFor="category">Category: </label>
                <select name="category" id="category" ref={(el) => categoryRef = el}>
                    <option value="all">All</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Dystopian">Dystopian</option>
                    <option value="Classic">Classic</option>
                    <option value="Romance">Romance</option>
                    <option value="Fantasy">Fantasy</option>
                </select><br />

                <label htmlFor="description">Description: </label><br/>
                <textarea id="description" type="text" name="description" ref={(el) => descriptionRef = el} placeholder="Write a small description" /><br />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
}
