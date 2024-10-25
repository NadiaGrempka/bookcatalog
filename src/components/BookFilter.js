import React from "react";
import { FaCat } from "react-icons/fa";

export function BookFilter ({ onFilter }) {
    const handleFilter = () => {
        const category = document.getElementById('category').value; // Pobierz wybraną kategorię
        onFilter(category); // Wywołaj przekazaną funkcję z wybraną kategorią
    };

    return (
        <div id='book-filter'>
            <FaCat />
            <label>Choose category: </label>
            <select name="category" id="category">
                <option value="all">All</option>
                <option value="Fiction">Fiction</option>
                <option value="Dystopian">Dystopian</option>
                <option value="Classic">Classic</option>
                <option value="Romance">Romance</option>
                <option value="Fantasy">Fantasy</option>
            </select>
            <br />
            <button onClick={handleFilter}>Filter</button>
        </div>
    );
};
