// react components
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Custom component
import Section from '../../components/sections/section.component';
import * as BooksApi from '../../BooksAPI';
// style sheet
import './searchPage.style.scss';

const SearchPage = ({ allBooks, onChangeBookShelf }) => {

    const [SearchResults, setSearchResults] = useState([])
    const [value, setValue] = useState('')

    const handleSearch = (e) => {
        const query = e.target.value;

        query === '' && setSearchResults([])

        if (query !== '') {
            try {
                BooksApi.search(query).then(res => {
                    setSearchResults(res)
                })
            } catch (error) {
                console.log('Oh no, We found an error', error);
            }
        };

        SearchResults.length > 0 && SearchResults.forEach(element => {
            if (!element.shelf) element.shelf = 'none';
            allBooks.forEach(book => {
                if (book.id === element.id) element.shelf = book.shelfs;
            })
        });

        setValue(query)
    }

    return (
        <div className="serach">
            <div className="search-bar">
                <Link to='/' className='back-btn'></Link>
                <input type="text" placeholder='Search By Title Or author'
                    value={value} onChange={handleSearch} />
            </div>
            <div className="container">
                <Section shelfBooks={SearchResults} title='Search Result'
                    onChangeBookShelf={onChangeBookShelf} />
            </div>
        </div>
    )
}

SearchPage.propTypes = {
    SearchResults: PropTypes.array,
    value: PropTypes.string,
}

export default SearchPage;