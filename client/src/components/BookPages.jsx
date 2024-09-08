import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import likeIco from '../assets/like.png';
import plusIco from '../assets/iconoir_plus.png';
import flagIco from '../assets/flag.png';
import starsIco from '../assets/star-raiting.png';
import starFilledIco from '../assets/star-filled.png';

export default function BookPages() {
    const [liked, setLiked] = useState(false);
    const [reading, setReading] = useState(false);
    const [read, setRead] = useState(false);

    const book = {
        id: 1,
        author: "Джин Вулф",
        title: "Меч и Цитадель",
        description: "«Меч и Цитадель» — вторая половина прославленной магической тетралогии «Книги Нового Солнца». «Меч ликтора» Севериан, ставший ликтором города Тракса, снова нарушает свой долг палача и устраивает побег женщине, которую должен был убить. Он вынужден бежать на север Содружества, в горы, преследуемый стражей Тракса и чудовищами, насылаемыми его старыми врагами. На севере полыхает война: войска Автарха сражаются с армией асциан. «Цитадель Автарха» История Севериана близится к финалу. Он откроет источник сил Когтя Миротворца и познает природу Автарха.Севериан вернется в Несс, в Цитадель, к своим учителям, но уже в новом качестве.",
        ageRestrictions: 12,
        copyright: "Издательство ЭКСМО",
        publisher: "fanzon",
        series: "Книга Нового Солнца",
        imgUrl: "https://avatars.mds.yandex.net/get-entity_search/7980340/612537180/S600xU",
        rating: 3,
    };

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
