import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import SearchBar from "./SearchBar";
import SearchResults from './SearchResults';



class SearchPage extends Component {
  state = {
      query: '',
      searchedBooks: []
  }  
  
  updateQuery = (query) => {
      this.setState({
          query: query
      })
    this.UpdateSearchedBooks(query);
    }
         
    UpdateSearchedBooks = (query) => {
        if (query) {
         BooksAPI.search(query).then((searchedBooks)  => {
           if (searchedBooks.error) {
            this.setState({ searchedBooks: [] });
           } else {
            this.setState({ searchedBooks: searchedBooks })
           }
        })
    }else{
        this.setState({ searchedBooks: [] });
    }}
    
            render () {
            return (
                <div className="search-books">
                  < SearchBar query={this.state.query} updateQuery={this.updateQuery} />
                  <SearchResults searchedBooks={this.state.searchedBooks} 
                                 books={this.props.books} 
                                 moveShelf={this.props.moveShelf} />
                </div>
            );
        }
    }

    export default SearchPage;