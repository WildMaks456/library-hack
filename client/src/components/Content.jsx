import React, { useState } from 'react';
import BookItem from './BookItem';

export default function Content() {
    const [books, setBooks] = useState([
        {
            author: "Лев Толстой",
            title: "Война и мир",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Фёдор Достоевский",
            title: "Преступление и наказание",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Анна Ахматова",
            title: "Реквием",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Габриэль Гарсиа Маркес",
            title: "Сто лет одиночества",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Джордж Оруэлл",
            title: "1984",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        }
    ])

    const [topAuthors, setTopAuthors] = useState([
        {
            author: "Лев Толстой",
            title: "Война и мир",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Фёдор Достоевский",
            title: "Преступление и наказание",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Анна Ахматова",
            title: "Реквием",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Габриэль Гарсиа Маркес",
            title: "Сто лет одиночества",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Джордж Оруэлл",
            title: "1984",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        }
    ])
    const [nonFiction, setNonFiction] = useState([
        {
            author: "Лев Толстой",
            title: "Война и мир",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Фёдор Достоевский",
            title: "Преступление и наказание",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Анна Ахматова",
            title: "Реквием",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Габриэль Гарсиа Маркес",
            title: "Сто лет одиночества",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Джордж Оруэлл",
            title: "1984",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Лев Толстой",
            title: "Война и мир",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Фёдор Достоевский",
            title: "Преступление и наказание",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Анна Ахматова",
            title: "Реквием",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Габриэль Гарсиа Маркес",
            title: "Сто лет одиночества",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Джордж Оруэлл",
            title: "1984",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Лев Толстой",
            title: "Война и мир",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Фёдор Достоевский",
            title: "Преступление и наказание",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Анна Ахматова",
            title: "Реквием",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Габриэль Гарсиа Маркес",
            title: "Сто лет одиночества",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Джордж Оруэлл",
            title: "1984",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Лев Толстой",
            title: "Война и мир",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Фёдор Достоевский",
            title: "Преступление и наказание",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Анна Ахматова",
            title: "Реквием",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Габриэль Гарсиа Маркес",
            title: "Сто лет одиночества",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Джордж Оруэлл",
            title: "1984",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Лев Толстой",
            title: "Война и мир",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Фёдор Достоевский",
            title: "Преступление и наказание",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Анна Ахматова",
            title: "Реквием",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Габриэль Гарсиа Маркес",
            title: "Сто лет одиночества",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Джордж Оруэлл",
            title: "1984",
            imageUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
    ])


    const scrollLeft = (type) => {
        const container = document.querySelector(type);
        container.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = (type) => {
        const container = document.querySelector(type);
        container.scrollBy({ left: 300, behavior: 'smooth' });
    };


    return (
        <>
            <div className="content">
                <h2>Содержание</h2>
                <ul className="toc">
                    <li><a href="#news"><span>Новости</span><div className="dots"></div><span className="page">01</span></a></li>
                    <li><a href="#popular"><span>Популярные книги</span><div className="dots"></div><span className="page">02</span></a></li>
                    <li><a href="#top-authors"><span>Лучшие авторы</span><div className="dots"></div><span className="page">03</span></a></li>
                    <li><a href=""><span>Последние поступления</span><div className="dots"></div><span className="page">04</span></a></li>
                    <li><a href="#fiction"><span>Нон-фикшен</span><div className="dots"></div><span className="page">05</span></a></li>
                    <li><a href=""><span>Детям</span><div className="dots"></div><span className="page">06</span></a></li>
                </ul>
            </div>
            <hr />
            <div id='news' className='news-container'>
                <div className="news-card">
                    <h3>HackTheBookshelf (подзаголовок)</h3>
                    <p>Друзья! 12 августа Карагандинская областная универсальная научная библиотека
                        им.Н.В.Гоголя объявляет о новом проекте «HackTheBookshelf». Под таким названием
                        при поддержке управления культуры. архивов и документации Карагандинской
                        области в партнерстве с управлением  информатизации, оказания госуслуг и архивов
                        Карагандинской области библиотека проводит Хакатон, посвященный 90-летию ОУНБ.
                        В Хакатоне могут принять участие  граждане Республики Казахстан, объединившиеся
                        в команды для выполнения задания:
                        Кейс 1. Разработка онлайн-платформы
                        Кейс 2. Разработка мобильного приложения</p>
                </div>
                <div className="news-card">
                    <h3>HackTheBookshelf (подзаголовок)</h3>
                    <p>Друзья! 12 августа Карагандинская областная универсальная научная библиотека
                        им.Н.В.Гоголя объявляет о новом проекте «HackTheBookshelf». Под таким названием
                        при поддержке управления культуры. архивов и документации Карагандинской
                        области  в партнерстве с управлением  информатизации, оказания госуслуг и архивов
                        Карагандинской области библиотека проводит Хакатон, посвященный 90-летию ОУНБ.
                        В Хакатоне могут принять участие  граждане Республики Казахстан, объединившиеся
                        в команды для выполнения задания:
                        Кейс 1. Разработка онлайн-платформы
                        Кейс 2. Разработка мобильного приложения</p>
                </div>
            </div>
            <hr />
            <div className="books-container">
                <div id='popular' className='popular-title'>
                    <div className="popular">
                        <button className="arrow arrow-left" onClick={() => { scrollLeft('.popular-cards') }}>←</button>
                        <div className="popular-cards">
                            {books.map((book, index) => (
                                <BookItem book={book} key={index} className={"popular-card"} />
                            ))}
                        </div>
                        <button className="arrow arrow-right" onClick={() => { scrollRight('.popular-cards') }}>→</button>
                    </div>
                </div>
                <hr />
                <div id='top-authors' className="authors-title">
                    <div className="top-authors">
                        <button className="arrow arrow-left" onClick={() => { scrollLeft('.authors-cards') }}>←</button>
                        <div className="authors-cards">
                            {topAuthors.map((book, index) => (
                                <BookItem book={book} key={index} className={"popular-card"} />
                            ))}
                        </div>
                        <button className="arrow arrow-right" onClick={() => { scrollRight('.authors-cards') }}>→</button>
                    </div>
                </div>
                <hr />
                <div id='fiction' className="fiction-title">
                    <div className="non-fiction">
                        <button className="arrow arrow-left" onClick={() => { scrollLeft('.fiction-cards') }}>←</button>
                        <div className="fiction-cards">
                            {nonFiction.map((book, index) => (
                                <BookItem book={book} key={index} className={"popular-card"} />
                            ))}
                        </div>
                        <button className="arrow arrow-right" onClick={() => { scrollRight('.fiction-cards') }}>→</button>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    );
}
