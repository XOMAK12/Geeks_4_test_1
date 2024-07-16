import React from 'react';
import classes from '../../page/mainPage/MainPage.module.css';
import Button from "../button/Button";

const BookList = ({ books, onDelete }) => {
    return (
        <div className={classes.bookList}>
            <h2>Название</h2>
            {books.map((book, index) => (
                <div key={index} className={classes.book}>
                    <p>{book}</p>
                    <Button label={'Удалить'} action={() => onDelete(index)}/>
                </div>
            ))}
        </div>
    );
};

export default BookList;