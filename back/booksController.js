const db = require('./db');

exports.addBook = (req, res) => {


    const query = `
        INSERT INTO books (author, title, description, ageRestrictions, copyright, publisher, series, imgUrl, rating)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.run(query, [req.body.author, req.body.title, req.body.description, req.body.ageRestrictions, req.body.copyright, req.body.publisher, req.body.series, req.body.imgUrl, req.body.rating], function(err) {
        if (err) {
            return res.status(500).json({ message: "Ошибка при добавлении книги", error: err.message });
        }
        res.status(201).json({ message: "Книга добавлена!", bookId: this.lastID });
    });
};

exports.deleteBook = (req, res) => {
    const bookId = parseInt(req.params.id);

    const query = `DELETE FROM books WHERE id = ?`;

    db.run(query, bookId, function(err) {
        if (err) {
            return res.status(500).json({ message: "Ошибка при удалении книги", error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ message: "Книга не найдена!" });
        }
        res.status(200).json({ message: "Книга удалена!" });
    });
};

exports.getBookById = (req, res) => {
    const bookId = parseInt(req.params.id);

    const query = `SELECT * FROM books WHERE id = ?`;

    db.get(query, bookId, (err, row) => {
        if (err) {
            return res.status(500).json({ message: "Ошибка при получении книги", error: err.message });
        }
        if (!row) {
            return res.status(404).json({ message: "Книга не найдена!" });
        }
        res.status(200).json(row);
    });
};


exports.getAllBooks = (req, res) => {
    const query = `SELECT * FROM books`;

    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: "Ошибка при получении книг", error: err.message });
        }
        res.status(200).json({ books: rows });
    });
};
