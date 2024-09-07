import React, { useState } from "react";
import Header from './Header';
import Footer from './Footer';
import GenresFilter from "./GenresFilter";
import BookItem from "./BookItem";

export default function Library() {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedGenres, setSelectedGenres] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 10;
	const [libraryBooks, setLibraryBooks] = useState([
		{
			author: "Лев Толстой",
			title: "Война и мир",
			imageUrl: "https://covers.openlibrary.org/b/id/8235116-L.jpg",
			genres: ["История", "Драма"]
		},
		{
			author: "Фёдор Достоевский",
			title: "Преступление и наказание",
			imageUrl: "https://covers.openlibrary.org/b/id/8319165-L.jpg",
			genres: ["Детектив", "Драма"]
		},
		{
			author: "Анна Ахматова",
			title: "Реквием",
			imageUrl: "https://covers.openlibrary.org/b/id/10477906-L.jpg",
			genres: ["Трагедия"]
		},
		{
			author: "Габриэль Гарсиа Маркес",
			title: "Сто лет одиночества",
			imageUrl: "https://covers.openlibrary.org/b/id/8226191-L.jpg",
			genres: ["Фантастика", "Мистика"]
		},
		{
			author: "Джордж Оруэлл",
			title: "1984",
			imageUrl: "https://covers.openlibrary.org/b/id/10282311-L.jpg",
			genres: ["Фантастика", "Триллер"]
		},
		{
			author: "Джейн Остин",
			title: "Гордость и предубеждение",
			imageUrl: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
			genres: ["Драма", "Роман"]
		},
		{
			author: "Агата Кристи",
			title: "Убийство в Восточном экспрессе",
			imageUrl: "https://covers.openlibrary.org/b/id/8679834-L.jpg",
			genres: ["Детектив", "Мистика"]
		},
		{
			author: "Джордж Мартин",
			title: "Игра престолов",
			imageUrl: "https://avatars.mds.yandex.net/get-entity_search/1870652/438209485/S600xU_2x",
			genres: ["Фэнтези", "Приключения"]
		},
		{
			author: "Говард Лавкрафт",
			title: "Зов Ктулху",
			imageUrl: "https://covers.openlibrary.org/b/id/11060565-L.jpg",
			genres: ["Ужасы", "Мистика"]
		},
		{
			author: "Исаак Азимов",
			title: "Основание",
			imageUrl: "https://covers.openlibrary.org/b/id/10546641-L.jpg",
			genres: ["Фантастика", "Приключения"]
		},
		{
			author: "Рэй Брэдбери",
			title: "451 градус по Фаренгейту",
			imageUrl: "https://covers.openlibrary.org/b/id/10578918-L.jpg",
			genres: ["Фантастика", "Антиутопия"]
		},
		{
			author: "Артур Конан Дойл",
			title: "Приключения Шерлока Холмса",
			imageUrl: "https://covers.openlibrary.org/b/id/8234150-L.jpg",
			genres: ["Детектив", "Приключения"]
		},
		{
			author: "Роберт Хайнлайн",
			title: "Звездный десант",
			imageUrl: "https://covers.openlibrary.org/b/id/7234119-L.jpg",
			genres: ["Боевик", "Фантастика"]
		},
		{
			author: "Джон Толкин",
			title: "Властелин колец",
			imageUrl: "https://covers.openlibrary.org/b/id/8300143-L.jpg",
			genres: ["Фэнтези", "Приключения"]
		},
		{
			author: "Юкио Мисима",
			title: "Золотой храм",
			imageUrl: "https://covers.openlibrary.org/b/id/10891264-L.jpg",
			genres: ["Боевые искусства", "История"]
		},
		{
			author: "Эрих Мария Ремарк",
			title: "На Западном фронте без перемен",
			imageUrl: "https://covers.openlibrary.org/b/id/8155489-L.jpg",
			genres: ["Военное", "Драма"]
		},
		{
			author: "Клайв Баркер",
			title: "Книги крови",
			imageUrl: "https://covers.openlibrary.org/b/id/8703094-L.jpg",
			genres: ["Ужасы", "Мистика"]
		},
		{
			author: "Чак Паланик",
			title: "Бойцовский клуб",
			imageUrl: "https://covers.openlibrary.org/b/id/10231018-L.jpg",
			genres: ["Боевик", "Триллер"]
		},
		{
			author: "Дэн Браун",
			title: "Код да Винчи",
			imageUrl: "https://covers.openlibrary.org/b/id/8786843-L.jpg",
			genres: ["Детектив", "Триллер"]
		},
		{
			author: "Стивен Кинг",
			title: "Сияние",
			imageUrl: "https://covers.openlibrary.org/b/id/10742042-L.jpg",
			genres: ["Ужасы", "Мистика"]
		},
		{
			author: "Ю Несбё",
			title: "Охотники за головами",
			imageUrl: "https://covers.openlibrary.org/b/id/8375202-L.jpg",
			genres: ["Триллер", "Детектив"]
		},
		{
			author: "Харуки Мураками",
			title: "1Q84",
			imageUrl: "https://covers.openlibrary.org/b/id/8286783-L.jpg",
			genres: ["Фантастика", "Мистика"]
		},
		{
			author: "Александр Дюма",
			title: "Три мушкетера",
			imageUrl: "https://covers.openlibrary.org/b/id/8313411-L.jpg",
			genres: ["Боевик", "Приключения"]
		},
		{
			author: "Роберт Льюис Стивенсон",
			title: "Остров сокровищ",
			imageUrl: "https://covers.openlibrary.org/b/id/8321287-L.jpg",
			genres: ["Приключения", "Триллер"]
		},
		{
			author: "Джеймс Клавелл",
			title: "Сёгун",
			imageUrl: "https://covers.openlibrary.org/b/id/8234221-L.jpg",
			genres: ["История", "Боевые искусства"]
		},
		{
			author: "Бернард Корнуэлл",
			title: "Азинкур",
			imageUrl: "https://covers.openlibrary.org/b/id/8432417-L.jpg",
			genres: ["История", "Военное"]
		},
		{
			author: "Джек Лондон",
			title: "Зов предков",
			imageUrl: "https://covers.openlibrary.org/b/id/8385123-L.jpg",
			genres: ["Приключения", "Трагедия"]
		},
		{
			author: "Джон Гришэм",
			title: "Фирма",
			imageUrl: "https://covers.openlibrary.org/b/id/8702147-L.jpg",
			genres: ["Триллер", "Детектив"]
		},
		{
			author: "Филип К. Дик",
			title: "Мечтают ли андроиды об электроовцах?",
			imageUrl: "https://covers.openlibrary.org/b/id/10474957-L.jpg",
			genres: ["Фантастика", "Триллер"]
		}
	]);

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value.toLowerCase());
	};

	const updateFilteredBooks = () => {
	};

	const filteredBooks = libraryBooks.filter((book) => {
		const matchesSearchQuery =
			book.title.toLowerCase().includes(searchQuery) ||
			book.author.toLowerCase().includes(searchQuery);

		const matchesGenre = selectedGenres.length === 0 || book.genres.some(genre => selectedGenres.includes(genre));

		return matchesSearchQuery && matchesGenre;
	});

	const paginatedBooks = filteredBooks.slice(0, currentPage * pageSize);

	const handleLoadMore = () => {
		setCurrentPage(prevPage => prevPage + 1);
	};

	return (
		<>
			<Header />
			<div className="library-container">
				<GenresFilter setSelectedGenres={setSelectedGenres} onSubmitGenres={updateFilteredBooks} />
				<div className="books-container_lib">
					<input
						type="text"
						value={searchQuery}
						onChange={handleSearchChange}
						placeholder="Поиск по названию или автору"
					/>
					<div className="books-library">
						{paginatedBooks.length > 0 ? (
							paginatedBooks.map((book, index) => (
								<BookItem book={book} key={index} className={"popular-card"} />
							))
						) : (
							<p>Нет книг</p>
						)}
					</div>
					{filteredBooks.length > paginatedBooks.length && (
						<button onClick={handleLoadMore} className="load-more-button">
							Ещё
						</button>
					)}
				</div>
			</div>
			<Footer />
		</>
	);
}
