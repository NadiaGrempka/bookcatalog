import React from "react";

export function BookInfo({title,author,category,description}){
    return (
        <div key="index">
            <h2>{title}</h2>
            <h3>{author}</h3>
            <h4>{category}</h4>
            <p>{description}</p>
        </div>
    )
}