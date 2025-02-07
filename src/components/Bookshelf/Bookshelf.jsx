import React, { useState } from 'react';
import './Bookshelf.css';

const Bookshelf = () => {
    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [books, setBooks] = useState([]);

    const handleTitleChange = (event) => {
        setBookTitle(event.target.value);
    };

    const handleAuthorChange = (event) => {
        setBookAuthor(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (bookTitle && bookAuthor) {
            setBooks([...books, { title: bookTitle, author: bookAuthor }]);
            setBookTitle('');
            setBookAuthor('');
        }
    };

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Book Title"
                        value={bookTitle}
                        onChange={handleTitleChange}
                    />
                    <input
                        type="text"
                        placeholder="Author"
                        value={bookAuthor}
                        onChange={handleAuthorChange}
                    />
                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book, index) => (
                    <div key={index} className="bookCard">
                        <h4>{book.title}</h4>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookshelf;