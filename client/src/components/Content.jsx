import React, { useState } from 'react';
import BookItem from './BookItem';

export default function Content() {
    const [books, setBooks] = useState([
        {
            author: "Лев Толстой",
            title: "Война и мир",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Фёдор Достоевский",
            title: "Преступление и наказание",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Анна Ахматова",
            title: "Реквием",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Габриэль Гарсиа Маркес",
            title: "Сто лет одиночества",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Джордж Оруэлл",
            title: "1984",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Лев Толстой",
            title: "Война и мир",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Фёдор Достоевский",
            title: "Преступление и наказание",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Анна Ахматова",
            title: "Реквием",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Габриэль Гарсиа Маркес",
            title: "Сто лет одиночества",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Джордж Оруэлл",
            title: "1984",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Лев Толстой",
            title: "Война и мир",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Фёдор Достоевский",
            title: "Преступление и наказание",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Анна Ахматова",
            title: "Реквием",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Габриэль Гарсиа Маркес",
            title: "Сто лет одиночества",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Джордж Оруэлл",
            title: "1984",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Лев Толстой",
            title: "Война и мир",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Фёдор Достоевский",
            title: "Преступление и наказание",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Анна Ахматова",
            title: "Реквием",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Габриэль Гарсиа Маркес",
            title: "Сто лет одиночества",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Джордж Оруэлл",
            title: "1984",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Лев Толстой",
            title: "Война и мир",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Фёдор Достоевский",
            title: "Преступление и наказание",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Анна Ахматова",
            title: "Реквием",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Габриэль Гарсиа Маркес",
            title: "Сто лет одиночества",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Джордж Оруэлл",
            title: "1984",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
    ])

    const [topAuthors, setTopAuthors] = useState([
        {
            author: "Лев Толстой",
            title: "Война и мир",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Фёдор Достоевский",
            title: "Преступление и наказание",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Анна Ахматова",
            title: "Реквием",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Габриэль Гарсиа Маркес",
            title: "Сто лет одиночества",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Джордж Оруэлл",
            title: "1984",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Лев Толстой",
            title: "Война и мир",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Фёдор Достоевский",
            title: "Преступление и наказание",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Анна Ахматова",
            title: "Реквием",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Габриэль Гарсиа Маркес",
            title: "Сто лет одиночества",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Джордж Оруэлл",
            title: "1984",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Лев Толстой",
            title: "Война и мир",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Фёдор Достоевский",
            title: "Преступление и наказание",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Анна Ахматова",
            title: "Реквием",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Габриэль Гарсиа Маркес",
            title: "Сто лет одиночества",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Джордж Оруэлл",
            title: "1984",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Лев Толстой",
            title: "Война и мир",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Фёдор Достоевский",
            title: "Преступление и наказание",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Анна Ахматова",
            title: "Реквием",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Габриэль Гарсиа Маркес",
            title: "Сто лет одиночества",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Джордж Оруэлл",
            title: "1984",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Лев Толстой",
            title: "Война и мир",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Фёдор Достоевский",
            title: "Преступление и наказание",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Анна Ахматова",
            title: "Реквием",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Габриэль Гарсиа Маркес",
            title: "Сто лет одиночества",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
        },
        {
            author: "Джордж Оруэлл",
            title: "1984",
            imgUrl: "https://via.placeholder.com/150x200/D9D9D9"
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
                    <li><span>Новости</span><div className="dots"></div><span className="page">01</span></li>
                    <li><span>Популярные книги</span><div className="dots"></div><span className="page">02</span></li>
                    <li><span>Лучшие авторы</span><div className="dots"></div><span className="page">03</span></li>
                    <li><span>Последние поступления</span><div className="dots"></div><span className="page">04</span></li>
                    <li><span>Нон-фикшен</span><div className="dots"></div><span className="page">05</span></li>
                    <li><span>Детям</span><div className="dots"></div><span className="page">06</span></li>
                </ul>
            </div>
            <hr />
            <div className='news-container'>
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
                <div className='popular-title'>
                    <div className="popular">
                        <button className="arrow arrow-left" onClick={() => { scrollLeft('.popular-cards') }}>←</button>
                        <div className="popular-cards">
                            {books.map((book, index) => (
                                <BookItem book={book} key={index} />
                            ))}
                        </div>
                        <button className="arrow arrow-right" onClick={() => { scrollRight('.popular-cards') }}>→</button>
                    </div>
                </div>
                <div className="authors-title">
                    <div className="top-authors">
                        <button className="arrow arrow-left" onClick={() => { scrollLeft('.authors-cards') }}>←</button>
                        <div className="authors-cards">
                            {topAuthors.map((book, index) => (
                                <BookItem book={book} key={index} />
                            ))}
                        </div>
                        <button className="arrow arrow-right" onClick={() => { scrollRight('.authors-cards') }}>→</button>
                    </div>
                </div>
                <div className="non-fiction"></div>
            </div>
        </>
    );
}
