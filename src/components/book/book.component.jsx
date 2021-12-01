import './book.style.scss';


const Book = ({ title, author, img, book, onChangeBookShelf }) => {
    return (
        <div className='book'>
            <img src={img} alt="Book" />
            <p className='book-title'>{title}</p>
            <p className='author'>{author}</p>
            {/* dropDownMenu */}
            <div className="book-shelf-changer">
                <select value={book.shelf} onChange={(e) => { onChangeBookShelf(book, e.target.value); }}>
                    <option value="move" disabled>Move to...</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        </div>
    )
}

export default Book;