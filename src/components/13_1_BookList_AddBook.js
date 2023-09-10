import React, { useState } from 'react';

function BookList() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', author: 'Author A' },
    { id: 2, title: 'Book 2', author: 'Author B' },
    { id: 3, title: 'Book 3', author: 'Author C' },
  ]);

  const [newBook, setNewBook] = useState({ title: '', author: '' });

  const handleAddBook = () => {
    if (newBook.title.trim() === '' || newBook.author.trim() === '') {
      alert('Please enter both title and author.');
      return;
    }

    const bookToAdd = {
      id: books.length + 1,
      title: newBook.title,
      author: newBook.author,
    };

    setBooks([...books, bookToAdd]);
    setNewBook({ title: '', author: '' });
  };

  return (
    <div>
      <h1>List of Books</h1>
      <form>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <button type="button" onClick={handleAddBook}>
          Add Book
        </button>
      </form>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>Title:</strong> {book.title} <br />
            <strong>Author:</strong> {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
