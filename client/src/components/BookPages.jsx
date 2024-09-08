import React from 'react'
import Header from './Header';
import Footer from './Footer';

export default function BookPages() {
    const book = {
        id: 1,
        author: "Джин Вулф",
        title: "Меч и Цитадель",
        discription: "«Меч и Цитадель» — вторая половина прославленной магической тетралогии «Книги Нового Солнца». «Меч ликтора» Севериан, ставший ликтором города Тракса, снова нарушает свой долг палача и устраивает побег женщине, которую должен был убить. Он вынужден бежать на север Содружества, в горы, преследуемый стражей Тракса и чудовищами, насылаемыми его старыми врагами. На севере полыхает война: войска Автарха сражаются с армией асциан. «Цитадель Автарха» История Севериана близится к финалу. Он откроет источник сил Когтя Миротворца и познает природу Автарха.Севериан вернется в Несс, в Цитадель, к своим учителям, но уже в новом качестве.",
        ageRestrictions: 12,
        copyright: "Издательство ЭКСМО",
        publisher: "fanzon",
        series: "Книга Нового Солнца",
        imgUrl: "https://avatars.mds.yandex.net/get-entity_search/7980340/612537180/S600xU",
        rating: 4.5,
    };
    return (
        <>
        <Header />
            <div className="book-page-container">
                <div className="book-page-img">
                    <img src={book.imgUrl} alt={book.title} />
                    <p>Выберете категорию: </p>
                    
                </div>
                <div className="book-page-info">
                    <h1>{book.title}</h1>
                    <h2>{book.author}</h2>
                    <p>{book.discription}</p>
                    <div className="book-page-rating">
                        <span>Рейтинг: {book.rating}</span>
                        <span>Возрастное ограничение: {book.ageRestrictions}+</span>
                    </div>
                </div>
            </div>
        <Footer />
        </>
    )
}
