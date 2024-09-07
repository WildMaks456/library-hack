import React from 'react';

export default function Content() {
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
                <div className="popular">

                </div>
                <div className="top-authors">

                </div>
                <div className="non-fiction"></div>
            </div>
        </>
    );
}
