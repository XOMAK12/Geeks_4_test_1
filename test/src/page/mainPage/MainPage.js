import React, {useState} from 'react';
import classes from './MainPage.module.css';
import BookList from "../../bookList/BookList";
import shape from "./image/Group 10.png"

const MainPage = () => {
    const [books, setBooks] = useState(['Том Сойер', 'Том Сойер', 'Том Сойер', 'Том Сойер']);
    const [newBook, setNewBook] = useState('');

    const addBook = () => {
        if (newBook) {
            setBooks([...books, newBook]);
            setNewBook('');
        }
    };
    const deleteBook = (index) => {
        setBooks(books.filter((book, i) => i !== index));
    };
    return (
        <>
            <div className={classes.shape}><img src={shape} alt=""/></div>
            <div className={classes.wrapper}>
                <h1 className={classes.h1}>Добавить книгу</h1>
                <div className={classes.addContainer}>
                    <div className={classes.addBlock}>
                        <p>Название</p>
                        <input
                            type="text"
                            placeholder={'Введите название'}
                            onChange={(event) => setNewBook(event.target.value)}
                        />
                    </div>
                    <button onClick={addBook}>Добавить</button>
                </div>
                <BookList books={books} onDelete={deleteBook}/>
            </div>
        </>

    );
};

export default MainPage;