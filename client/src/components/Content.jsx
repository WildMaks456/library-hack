import React from 'react'

export default function Content() {
    return (
        <div className="content">
            <h2>Содержание</h2>
            <ul className="toc">
                <li><span>Новости</span><span class="page">01</span></li>
                <li><span>Популярные книги</span><span class="page">02</span></li>
                <li><span>Лучшие авторы</span><span class="page">03</span></li>
                <li><span>Последние поступления</span><span class="page">04</span></li>
                <li><span>Нон-фикшен</span><span class="page">05</span></li>
                <li><span>Детям</span><span class="page">06</span></li>
            </ul>
        </div>
    )
}
