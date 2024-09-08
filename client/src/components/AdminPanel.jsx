import {useEffect, useState} from "react";
import axios from "axios";

export const AdminPanel = () => {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ageRestrictions, setAgeRestrictions] = useState('');
    const [copyright, setCopyright] = useState('');
    const [publisher, setPublisher] = useState('');
    const [series, setSeries] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [rating, setRating] = useState('');
    const [books, setBooks] = useState([]);

    const addBook = async (newBook) => {
        try {
            const res = await axios.post("http://localhost:5001/books/add-book", newBook)
            getBooks()
            console.log(res)
            return res
        } catch (e) {
            console.error(e)
        }
    }

    const getBooks = async () => {
        try {
            const res = await axios.get("http://localhost:5001/books/get-all-books");
            console.log(res)
            setBooks(res.data.books)
            console.log(books)
            return res
        } catch (e) {
            console.error(e)
        }

    }

    const getBookById = async () => {
        try {
            const res = await axios.get(`http://localhost:5001/books/get-book/2`)
            console.log(res)
            return res
        } catch (e) {
            console.error(e)
        }
    }

    const deleteBook = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5001/books/delete-book/${id}`)
            console.log(res)
            getBooks()
            return res
        } catch (e) {
            console.error(e)
        }
    }


    const handleSubmit =  (e) => {
        e.preventDefault();

        const newBook = {
            author,
            title,
            description,
            ageRestrictions: parseInt(ageRestrictions),
            copyright,
            publisher,
            series,
            imgUrl,
            rating: parseFloat(rating),
        };

        addBook(newBook)

        setAuthor('');
        setTitle('');
        setDescription('');
        setAgeRestrictions('');
        setCopyright('');
        setPublisher('');
        setSeries('');
        setImgUrl('');
        setRating('');

    };

    useEffect(() => {
        getBooks()
        getBookById()
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Author:</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
                </div>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div>
                    <label>Age Restrictions:</label>
                    <input type="number" value={ageRestrictions} onChange={(e) => setAgeRestrictions(e.target.value)}/>
                </div>
                <div>
                    <label>Copyright:</label>
                    <input type="text" value={copyright} onChange={(e) => setCopyright(e.target.value)}/>
                </div>
                <div>
                    <label>Publisher:</label>
                    <input type="text" value={publisher} onChange={(e) => setPublisher(e.target.value)}/>
                </div>
                <div>
                    <label>Series:</label>
                    <input type="text" value={series} onChange={(e) => setSeries(e.target.value)}/>
                </div>
                <div>
                    <label>Image URL:</label>
                    <input type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)}/>
                </div>
                <div>
                    <label>Rating:</label>
                    <input type="number" step="0.1" value={rating} onChange={(e) => setRating(e.target.value)}/>
                </div>
                <button type="submit">Add Book</button>
            </form>

            {books.map((book) => (
                <div>
                    <h3>{book.id}</h3>
                    <p>{book.title}</p>
                    <button onClick={() => deleteBook(book.id)}>X</button>
                </div>
            ))}
        </>

    );
};