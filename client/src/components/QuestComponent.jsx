import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import featherIco from '../assets/Feather Icon.png';

export default function QuestComponent() {
    const questions = [
        {
            questionText: 'Как звали древнегреческого бога грома и молнии?',
            answerOptions: [
                { answerText: 'Зевс', isCorrect: true },
                { answerText: 'Анубис', isCorrect: false },
                { answerText: 'Персей', isCorrect: false },
            ],
            level: "Начальный"
        },
        {
            questionText: 'Кто отец Ахиллеса?',
            answerOptions: [
                { answerText: 'Пелеус', isCorrect: true },
                { answerText: 'Зевс', isCorrect: false },
                { answerText: 'Атрей', isCorrect: false },
            ],
            level: "Средний"
        },
        {
            questionText: 'Как звали бога судьбы?',
            answerOptions: [
                { answerText: 'Аргон', isCorrect: true },
                { answerText: 'Анубис', isCorrect: false },
                { answerText: 'Персей', isCorrect: false },
            ],
            level: "Высокий"
        }
        // Add more questions as needed
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedOption === null) {
            alert('Please select an option');
            return;
        }

        const isCorrect = questions[currentQuestion].answerOptions[selectedOption].isCorrect;
        alert(`Selected Option is ${isCorrect ? 'correct' : 'incorrect'}`);

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedOption(null); // Reset selection for next question
        } else {
            alert('Quiz finished!');
            setCurrentQuestion(0); // Reset to first question
            setSelectedOption(null); // Reset selection
        }
    };

    return (
        <>
            <Header />
            <div className="quiz">
							<div>
<div className='title-quiz'>
                    <img src={featherIco} alt="Feather Icon" />
                    <div>
                        <h2>Мифология</h2>
                        <span>Как хорошо вы знаете древние мифы?</span> <br />
                        <span>Уровень: {questions[currentQuestion].level}</span>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="question">
                        <p>{questions[currentQuestion].questionText}</p>
                        {questions[currentQuestion].answerOptions.map((option, index) => (
                            <label key={index}>
                                <input
                                    type="radio"
                                    name="answer"
                                    checked={selectedOption === index}
                                    onChange={() => setSelectedOption(index)}
                                />
                                {option.answerText}
                            </label>
                        ))}
                    </div>
                    <button className='communities-nav-right-div-btn' type="submit" disabled={selectedOption === null}>
                        {currentQuestion < questions.length - 1? 'Далее' : 'Завершить'}
                    </button>
                </form>
							</div>
            </div>
            <Footer />
        </>
    );
}
