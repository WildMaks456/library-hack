import React from 'react';
import FeatherIco from '../assets/Feather Icon.png';
import Header from './Header';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

const categories = [
    {
        name: 'Мифология',
        description: 'Как хорошо вы знаете древние мифы?',
        difficultyLevels: ['Начальный', 'Средний', 'Высокий']
    },
    {
        name: 'История',
        description: 'Узнайте, насколько хорошо вы знаете историю.',
        difficultyLevels: ['Начальный', 'Средний', 'Высокий']
    },
    {
        name: 'Наука',
        description: 'Проверьте свои знания в области науки.',
        difficultyLevels: ['Начальный', 'Средний', 'Высокий']
    }
];

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
                    <h5>Выберите уровень сложности</h5>
                    {categories.map((category, index) => (
                        <div className="quest" key={index}>
                            <div className="name-quest">
                                <img src={FeatherIco} alt="" />
                                <div>

                                    <h4>{category.name}</h4>
                                    <p>{category.description}</p>
                                </div>
                            </div>
                            <div className="difficulty-quest">
                                {category.difficultyLevels.map((level, idx) => {
                                    let buttonClass = '';
                                    if (level === 'Начальный') {
                                        buttonClass = 'button-easy';
                                    } else if (level === 'Средний') {
                                        buttonClass = 'button-medium';
                                    } else if (level === 'Высокий') {
                                        buttonClass = 'button-hard';
                                    }

                                    return (
																			<NavLink to="/question">
                                        <button key={idx} className={buttonClass}>
                                            {level}
                                        </button>
																			</NavLink>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
