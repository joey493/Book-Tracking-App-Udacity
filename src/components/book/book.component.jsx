import './book.style.scss';


const Book = ({ title, author, img, book, onChangeBookShelf }) => {
    console.log(book)

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${img})` }} />
                <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={(e) => { onChangeBookShelf(book, e.target.value); }}>
                        <option value="move" disabled>Move to...</option>
                        <option value="none">None</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="read">Read</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{author}</div>
        </div>
    )
}

export default Book;