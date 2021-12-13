import { Link } from 'react-router-dom';

import Section from '../../components/sections/section.component';

import './HomePage.style.scss';

const HomePage = ({ allBooks, onChangeBookShelf }) => {
    const shelvesHandler = (books) => {
        // function output
        let shelvesArr = [];
        // shelves arr
        const shelves = [
            {
                shelf: 'wantToRead',
                title: 'Want To Read'
            },
            {
                shelf: 'currentlyReading',
                title: 'Currently Reading'
            },
            {
                shelf: 'read',
                title: 'Read'
            }
        ]
        shelves.forEach(({ shelf, title }, index) => {
            // filter books according to it's shelf
            const filteredArr = books && books.filter(book => book.shelf === shelf);

            // push shelves in output array
            shelvesArr = [
                ...shelvesArr,
                {
                    id: index,
                    title: title,
                    books: filteredArr,
                }
            ]
        })
        return shelvesArr;
    }

    const shelfBooks = shelvesHandler(allBooks);
    return ( 
        <div className='HomePage'>
            {shelfBooks.map(shelf => (
                <Section shelfBooks={shelf.books} title={shelf.title}
                    key={shelf.id} bkgColor={shelf.bkgColor}
                    onChangeBookShelf={onChangeBookShelf} />
            ))}
            <Link to='/search' className="search-page-btn"></Link>
        </div>
    )
}

export default HomePage;