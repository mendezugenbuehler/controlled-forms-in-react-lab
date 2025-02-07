import React, { useState } from 'react';
import './Bookshelf.css';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Stone Butch Blues', author: 'Leslie Feinberg' },
        { title: 'Another Country', author: 'James Baldwin' }
    ]);
    const [newBook, setNewBook] = useState({ title: '', author: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBook((prevBook) => ({
            ...prevBook,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newBook.title && newBook.author) {
            setBooks([...books, { ...newBook }]);
            setNewBook({ title: '', author: '' });
        }
    };

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Book Title"
                        value={newBook.title}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="author"
                        placeholder="Author"
                        value={newBook.author}
                        onChange={handleInputChange}
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
