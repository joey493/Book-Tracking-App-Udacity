import Book from '../book/book.component';
import './section.style.scss';

const Section = ({ title, shelfBooks, onChangeBookShelf }) => {
    const defaultImg = 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api';

    return (
        <section>
            <div className="container">
                <h2>{title}</h2>
                <div className="books">
                    {shelfBooks.length > 0 && shelfBooks.map(obj =>
                    (<Book key={obj.id} title={obj.title}
                        author={obj.authors} img={obj.imageLinks === undefined ? defaultImg : obj.imageLinks.thumbnail}
                        book={obj} onChangeBookShelf={onChangeBookShelf} />)
                    )}
                </div>
            </div>
        </section>
    )
}

export default Section;
