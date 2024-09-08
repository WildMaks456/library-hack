import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import likeIco from '../assets/like.png';
import plusIco from '../assets/iconoir_plus.png';
import flagIco from '../assets/flag.png';
import starsIco from '../assets/star-raiting.png';
import starFilledIco from '../assets/star-filled.png';
import { useParams } from 'react-router-dom';

export default function BookPages() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [liked, setLiked] = useState(false);
    const [reading, setReading] = useState(false);
    const [read, setRead] = useState(false);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/books/get-book/${id}`);
                setBook(response.data);
            } catch (error) {
                console.error('Ошибка при получении данных о книге:', error);
            }
        };

        fetchBook();
    }, [id]);

    if (!book) {
        return <p>Загрузка...</p>; // Или другой индикатор загрузки
    }

    const totalStars = 5;
    const filledStars = Math.round(book.rating);
    const starElements = Array.from({ length: totalStars }, (_, index) => (
        <img
            key={index}
            src={index < filledStars ? starFilledIco : starsIco}
            alt="star"
            className="star"
        />
    ));

    return (
        <>
            <Header />
            <div className="book-page-container">
                <div className="book-page-img">
                    <img className='book-page-logo' src={book.imgUrl} alt={book.title} />
                    <p>Выберите категорию: </p>
                    <div className="categories-book-page">
                        <div
                            className={`category-book-page ${liked ? 'active-btn-like' : ''}`}
                            onClick={() => setLiked(!liked)}
                        >
                            <img src={likeIco} alt="" />
                            <span>Любимое</span>
                        </div>
                        <div
                            className={`category-book-page ${reading ? 'active-btn-reading' : ''}`}
                            onClick={() => setReading(!reading)}
                        >
                            <img src={plusIco} alt="" />
                            <span>Читаю</span>
                        </div>
                        <div
                            className={`category-book-page ${read ? 'active-btn-read' : ''}`}
                            onClick={() => setRead(!read)}
                        >
                            <img src={flagIco} alt="" />
                            <span>Прочитал</span>
                        </div>
                    </div>
                </div>
                <div className="book-page-info">
                    <h2>{book.title}</h2>
                    <h3>{book.author}</h3>
                    <p>{book.description}</p>
                    <ul className="characteristics-book">
                        <li>Возрастные ограничения: {book.ageRestrictions}+</li>
                        <li>Правообладатель: {book.copyright}</li>
                        <li>Издательство: {book.publisher}</li>
                        <li>Серия: {book.series}</li>
                    </ul>
                </div>
                <div className="rating-book-page">
                    <span>Рейтинг</span>
                    <h4>{book.rating}</h4>
                    <div className="stars-book-page">
                        {starElements}
                    </div>
                    <a>Уже прочитали? <br /> Оцените!</a>
                </div>
            </div>
            <Footer />
        </>
    );
}
