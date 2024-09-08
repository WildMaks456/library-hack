import "../styles/Profile.css"
import BookItem from "./BookItem";
import { useDispatch, useSelector } from 'react-redux';
import { setIsValidToken } from './modalSlice';
import Header from "./Header"

export const Profile = () => {
	const dispatch = useDispatch();
    const books  = [
        {
            imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=1984",
            author: "George Orwell",
            title: "1984"
        },
        {
            imageUrl: "https://via.placeholder.com/150/008000/FFFFFF?text=To+Kill+a+Mockingbird",
            author: "Harper Lee",
            title: "To Kill a Mockingbird"
        },
        {
            imageUrl: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Harry+Potter",
            author: "J.K. Rowling",
            title: "Harry Potter and the Sorcerer's Stone"
        },
        {
            imageUrl: "https://via.placeholder.com/150/FFA500/FFFFFF?text=The+Great+Gatsby",
            author: "F. Scott Fitzgerald",
            title: "The Great Gatsby"
        },
        {
            imageUrl: "https://via.placeholder.com/150/800080/FFFFFF?text=The+Lord+of+the+Rings",
            author: "J.R.R. Tolkien",
            title: "The Lord of the Rings"
        },        {
            imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=1984",
            author: "George Orwell",
            title: "1984"
        },
        {
            imageUrl: "https://via.placeholder.com/150/008000/FFFFFF?text=To+Kill+a+Mockingbird",
            author: "Harper Lee",
            title: "To Kill a Mockingbird"
        },
        {
            imageUrl: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Harry+Potter",
            author: "J.K. Rowling",
            title: "Harry Potter and the Sorcerer's Stone"
        },
        {
            imageUrl: "https://via.placeholder.com/150/FFA500/FFFFFF?text=The+Great+Gatsby",
            author: "F. Scott Fitzgerald",
            title: "The Great Gatsby"
        },
        {
            imageUrl: "https://via.placeholder.com/150/800080/FFFFFF?text=The+Lord+of+the+Rings",
            author: "J.R.R. Tolkien",
            title: "The Lord of the Rings"
        },        {
            imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=1984",
            author: "George Orwell",
            title: "1984"
        },
        {
            imageUrl: "https://via.placeholder.com/150/008000/FFFFFF?text=To+Kill+a+Mockingbird",
            author: "Harper Lee",
            title: "To Kill a Mockingbird"
        },
        {
            imageUrl: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Harry+Potter",
            author: "J.K. Rowling",
            title: "Harry Potter and the Sorcerer's Stone"
        },
        {
            imageUrl: "https://via.placeholder.com/150/FFA500/FFFFFF?text=The+Great+Gatsby",
            author: "F. Scott Fitzgerald",
            title: "The Great Gatsby"
        },
        {
            imageUrl: "https://via.placeholder.com/150/800080/FFFFFF?text=The+Lord+of+the+Rings",
            author: "J.R.R. Tolkien",
            title: "The Lord of the Rings"
        },
    ];

		const exit = () => {
			localStorage.removeItem("token")
			dispatch(setIsValidToken(false));
		}

    return (
			<>
				<Header />
        <div className="container">
            <div className="profile">
                <div className="profile-info">
                    <div className="profile-photo"></div>
                    <div className="profile-form">
                        <label htmlFor=""> Фио </label>
                        <input type="text" placeholder="Фио"/>
                        <label htmlFor=""> Почта </label>
                        <input type="text" placeholder="example@gmail.com"/>
                        <label htmlFor="">Номер телефона</label>
                        <input type="text" placeholder="+777777777"/>
												<div className="row">
													<span>Редактировать</span>
													<span onClick={exit}>Выйти</span>
												</div>
                    </div>
                </div>

                <div className="overall-statistics">
                    <h4>Все книги </h4>
                    <div className="chart">
                        <div className="pie-chart"></div>
                        <div className="chart-info"></div>
                    </div>
                </div>
            </div>

            <div className="my-shelf">
                <h4>Моя полка</h4>
                <div className="book-shelf">
                    <div className="book-shelf-sidebar">
                        <div className="all"></div>
                        <div className="favourite"></div>
                    </div>
                    <div className="all-books">
                        <h4>Все книги (4)</h4>
                        <div className="books-cards">
                            {books.map((book) => <BookItem className="book-card" book={book}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
			
			</>
    );
};