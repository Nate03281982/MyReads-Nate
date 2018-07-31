import React from 'react';
import Book from './Book';

const BookShelf = (props) => (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {
              props.books
              .filter(book => book.shelf === props.shelf)
              .map(book => (
                <li key={book.id} >
                    <Book 
                      book={book}
                      moveShelf={props.moveShelf}
                      currentShelf={props.shelf}
                    />
                </li>
              ))
                
              }
        </ol>
      </div>
  </div>
  )

export default BookShelf