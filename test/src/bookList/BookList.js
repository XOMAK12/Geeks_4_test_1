import React from 'react';
import Book from "../book/Book";
import classes from "../book/Book.module.css"

const BookList = ({books, onDelete}) => {
    return (
        <div className={classes.bookList}>
            <h2>Название</h2>
            {books.map((book, index) => (
                <Book key={index} name={book} onDelete={() => onDelete(index)} />
            ))}
        </div>
    );
};

export default BookList;