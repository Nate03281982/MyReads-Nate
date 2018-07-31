import React from 'react';
import Book from './Book';

const SearchResults = (props) => { 
    return(
        <div className="search-books-results">
            <ol className="books-grid">
                {
                    props.searchedBooks.map(searchedBook => {                            
                    let shelf = "none"
                    
                    props.books.map(book => (
                    book.id === searchedBook.id ? shelf = book.shelf : ''
                    ));

                    return (
                        <li key={searchedBook.id}>
                            <Book book={searchedBook}
                                moveShelf={props.moveShelf}
                                currentShelf={shelf}
                            />
                        </li>
                        )
                    })    
                }    
            </ol>
        </div>
    )
}

export default SearchResults