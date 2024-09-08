import React from 'react'
import FeatherIco from '../assets/Feather Icon.png'
import Header from './Header'
import Footer from './Footer'

export default function Quests() {

    return (
        <>
            <Header />
            <div className="quests-container">
                <div className="quests-description">
                    <h2>Книжные квизы: кто готов к вызову?</h2>
                    <p>От классики до современности — справитесь ли вы с нашими загадками?</p>
                </div>
                <div className="quests">
                    <h5>Выберете уровень сложности</h5>
                    <div className="quest">
                        <img src={FeatherIco} alt="" />
                        <div className="name-quest">
                            <h4>Мифология</h4>
                            <p>Как хорошо вы знаете древние мифы?</p>
                            <div className="difficulty">
                                <button>Начальный</button>
                                <button>Средний</button>
                                <button>Высокий</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
