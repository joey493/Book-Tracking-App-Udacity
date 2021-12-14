import { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomePage from './pages/HomePage/Home.page';
import SearchPage from './pages/SearchPage/search.page';
import * as BooksApi from './BooksAPI';

import './main-style.scss';

const App = () => {
  const [allBooks, setAllBooks] = useState([])

  // fetch all Books from BooksAPI
  const getBooks = () => {
      try {
        BooksApi.getAll().then( books =>{
          setAllBooks([...books])
        });
      } catch (error) {
        console.log('Oh no, We found an error', error);
      }
    }
  
  // Update books shelf
  const updateBookShelf = async (book, shelf) => {
    if (book.shelf === shelf ) return;
      try {
        await BooksApi.update(book, shelf);
      } catch (error) {
        console.log('Oh no, We found an error', error);
      }
      getBooks();
    }
  
    useEffect(() => {
      getBooks()
    },[])

  return (
    <>
      <header>
          <div className="container">
              <h1><span className="h-font-style">My</span>Reads</h1>
              <Link className='link' to='/'>Home</Link>
          </div>
      </header>
      <Routes>
        <Route exact path='/' element={<HomePage allBooks={allBooks} onChangeBookShelf={updateBookShelf}/>} />
        <Route path='/search' element={<SearchPage allBooks={allBooks} onChangeBookShelf={updateBookShelf}/>}/>
      </Routes>
    </>
  )
}

App.propTypes = {
  allBooks: PropTypes.array,
}

export default App;