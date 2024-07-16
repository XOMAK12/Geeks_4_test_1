import React, { useState } from 'react';
import classes from './MainPage.module.css';
import shape from "./image/Group 10.png";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import BookList from "../../components/bookList/BookList";

const MainPage = () => {
    const [books, setBooks] = useState(['Том Сойер', 'Том Сойер', 'Том Сойер', 'Том Сойер']);
    const [newBook, setNewBook] = useState('');

    const addBook = () => {
        if (newBook.trim()) {
            setBooks([...books, newBook]);
            setNewBook('');
        }
    };

    const deleteBook = (index) => {
        setBooks(books.filter((_, i) => i !== index));
    };

    return (
        <div className={classes.wrapper}>
            <img className={classes.shape} src={shape} alt="shape"/>
            <h1 className={classes.h1}>Добавить книгу</h1>
            <div className={classes.addContainer}>
                <div className={classes.addBlock}>
                    <p>Название</p>
                    <Input
                        value={newBook}
                        onChange={(e) => setNewBook(e.target.value)}
                        placeholder={'Введите название'}
                    />
                </div>
                <Button
                    label="Добавить"
                    action={addBook}
                />
            </div>
            <BookList
                books={books}
                onDelete={deleteBook}
            />
        </div>
    );
};

export default MainPage;
