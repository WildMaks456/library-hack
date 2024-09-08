const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./library.db', (err) => {
    if (err) {
        console.error('Ошибка подключения к базе данных:', err.message);
    } else {
        console.log('Подключение к базе данных SQLite успешно установлено.');
    }
});

db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        phone TEXT,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        avatar TEXT,
        books_to_read TEXT,
        books_read TEXT,
        books_reading TEXT,
        roles TEXT
    );
`, (err) => {
    if (err) {
        console.error('Ошибка создания таблицы:', err.message);
    } else {
        console.log("Таблица 'users' создана или уже существует.");
    }
});

db.run(`
	CREATE TABLE IF NOT EXISTS posts (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			title TEXT NOT NULL,
			content TEXT NOT NULL,
			created_at TEXT,
			author_id INTEGER,
			likes INTEGER DEFAULT 0,
			dislikes INTEGER DEFAULT 0,
			comments TEXT DEFAULT '[]',
			FOREIGN KEY(author_id) REFERENCES users(id)
	);
`, (err) => {
	if (err) {
			console.error('Ошибка создания таблицы "posts":', err.message);
	} else {
			console.log("Таблица 'posts' создана или уже существует.");
	}
});

db.run(`
	CREATE TABLE IF NOT EXISTS swap_books (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			author_id INTEGER,
			created_at TEXT,
			image TEXT,
			book_author TEXT,
			book_title TEXT,
			description TEXT,
			FOREIGN KEY(author_id) REFERENCES users(id)
	);
`, (err) => {
	if (err) {
			console.error('Ошибка создания таблицы "swap_books":', err.message);
	} else {
			console.log("Таблица 'swap_books' создана или уже существует.");
	}
});

db.run(`
        CREATE TABLE IF NOT EXISTS books (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            author TEXT NOT NULL,
            title TEXT NOT NULL,
            description TEXT,
            ageRestrictions INTEGER,
            copyright TEXT,
            publisher TEXT,
            series TEXT,
            imgUrl TEXT,
            rating REAL,
            genres TEXT
        )
    `, (err) => {
	if (err) {
		console.error('Ошибка при создании таблицы:', err.message);
	} else {
		console.log('Таблица books успешно создана или уже существует.');
	}
});






module.exports = db;
