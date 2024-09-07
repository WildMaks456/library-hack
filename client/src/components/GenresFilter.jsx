import React, { useState } from "react";

export default function GenresFilter({ setSelectedGenres, onSubmitGenres }) {
    const genres = [
        "Боевик", "Боевые искусства", "Военное", "Детектив", "Драма", "История", 
        "Комедия", "Мистика", "Спорт", "Трагедия", "Триллер", "Ужасы", 
        "Фантастика", "Фэнтези"
    ];

    const [selectedGenresState, setSelectedGenresState] = useState([]);

    const handleGenreChange = (genre) => {
        const newSelectedGenres = selectedGenresState.includes(genre)
            ? selectedGenresState.filter((g) => g !== genre)
            : [...selectedGenresState, genre];

        setSelectedGenresState(newSelectedGenres);
    };

    const handleReset = () => {
        setSelectedGenresState([]);
        setSelectedGenres([]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSelectedGenres(selectedGenresState);
        onSubmitGenres();  
    };

    return (
        <div className="genres-filter">
            <div className="genres-title">
                <h3>Жанры</h3>
                <button className="reset-btn" onClick={handleReset}>Сбросить</button>
            </div>
            <p>Фильтр по жанрам</p>
            <form className="genres-form" onSubmit={handleSubmit}>
                <div className="genres-list">
                    {genres.map((genre) => (
                        <div key={genre}>
                            <label className="genre-item">
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                    checked={selectedGenresState.includes(genre)}
                                    onChange={() => handleGenreChange(genre)}
                                />
                                <span className="custom-checkbox-box"></span>
                                {genre}
                            </label>
                        </div>
                    ))}
                </div>
                <button type="submit" className="submit-button">Выбрать</button>
            </form>
        </div>
    );
}
