import React, {useEffect, useState} from "react";
import Header from './Header';
import Footer from './Footer';
import GenresFilter from "./GenresFilter";
import BookItem from "./BookItem";
import axios from "axios";

export default function Library() {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedGenres, setSelectedGenres] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 10;
	const [libraryBooks, setLibraryBooks] = useState([]);


	const getBooks = async () => {
		try {
			const res = await axios.get("http://localhost:5000/books/get-all-books")
			console.log(res.data)
			setLibraryBooks(res.data.books)
			console.log(JSON.parse(res.data.books[0].genres))
			return res
		} catch (e) {
			console.error(e)
		}

	}


	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value.toLowerCase());
	};

	const updateFilteredBooks = () => {
	};

	const filteredBooks = libraryBooks.filter((book) => {
		const matchesSearchQuery =
			book.title.toLowerCase().includes(searchQuery) ||
			book.author.toLowerCase().includes(searchQuery);

		const matchesGenre = selectedGenres.length === 0 || JSON.parse(book.genres).some(genre => selectedGenres.includes(genre));

		return matchesSearchQuery && matchesGenre;
	});

	const paginatedBooks = filteredBooks.slice(0, currentPage * pageSize);

	const handleLoadMore = () => {
		setCurrentPage(prevPage => prevPage + 1);
	};

	useEffect(() => {
		getBooks()
	}, []);

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