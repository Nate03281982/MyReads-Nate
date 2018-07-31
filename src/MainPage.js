import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';


class MainPage extends Component {
render() {
    return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            < BookShelf books={this.props.books} title="Currently Reading" shelf="currentlyReading" moveShelf={this.props.moveShelf}/>
            < BookShelf books={this.props.books} title="Want To Read" shelf="wantToRead" moveShelf={this.props.moveShelf}/>
            < BookShelf books={this.props.books} title="Read" shelf="read" moveShelf={this.props.moveShelf}/>
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
             >Add a book</Link>
        </div>
      </div>
   
    );
  }
}

export default MainPage