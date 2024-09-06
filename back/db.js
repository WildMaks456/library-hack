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

module.exports = db;
