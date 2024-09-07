import React from 'react';

export default function Content() {
    return (
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
    );
}
