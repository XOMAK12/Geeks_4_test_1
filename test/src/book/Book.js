import React from 'react';
import classes from './Book.module.css';

const Book = ({name, onDelete}) => {
    return (
        <div>
            <div className={classes.book}>
                <p>{name}</p>
                <button onClick={onDelete}>Удалить</button>
            </div>
        </div>
    );
};

export default Book;