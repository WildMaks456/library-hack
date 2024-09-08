const db = require("./db");

class postsController {
    // Добавление поста
    async addPost(req, res) {
			try {
					console.log("req.body:", req.body);
					console.log("req.user:", req.user);
	
					const { title, text: content } = req.body;
					const author_id = req.user.id; // Берем ID автора из токена
					if (!title || !content || !author_id) {
							return res.status(400).json({ message: "Не все данные для поста переданы" });
					}
	
					const createdAt = new Date().toLocaleDateString('ru-RU')
					console.log(createdAt);
					
					db.run(
							`INSERT INTO posts (title, content, created_at, author_id) VALUES (?, ?, ?, ?)`,
							[title, content, createdAt, author_id],
							function (err) {
									if (err) {
											console.error("Ошибка базы данных:", err);
											return res.status(500).json({ error: "Ошибка при добавлении поста" });
									}
									res.status(201).json({ id: this.lastID, message: "Пост добавлен" });
							}
					);
			} catch (e) {
					console.error("Ошибка сервера:", e);
					res.status(500).json({ message: "Ошибка добавления поста" });
			}
	}
	

    // Получение всех постов
    async getAllPosts(req, res) {
			try {
					db.all(`SELECT * FROM posts`, [], async (err, posts) => {
							if (err) {
									return res.status(500).json({ error: err.message });
							}
	
							// Пройдемся по каждому посту и добавим email автора
							const postsWithAuthorEmail = await Promise.all(posts.map(async (post) => {
									return new Promise((resolve, reject) => {
											db.get(`SELECT email FROM users WHERE id = ?`, [post.author_id], (err, user) => {
													if (err) {
															reject(err);
													} else {
															resolve({
																	...post,
																	author_email: user ? user.email : "Автор не найден"
															});
													}
											});
									});
							}));
	
							res.json(postsWithAuthorEmail);
					});
			} catch (e) {
					console.log(e);
					res.status(500).json({ message: "Ошибка получения постов" });
			}
	}
	

    // Получение поста по ID
    async getPostById(req, res) {
        try {
            const { id } = req.params;
            db.get(`SELECT * FROM posts WHERE id = ?`, [id], (err, row) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                res.json(row);
            });
        } catch (e) {
            console.log(e);
            res.status(500).json({ message: "Ошибка получения поста" });
        }
    }

    // Добавление комментария
    async addComment(req, res) {
        try {
            const { post_id, comment } = req.body;
            db.get(`SELECT comments FROM posts WHERE id = ?`, [post_id], (err, row) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                let comments = JSON.parse(row.comments || "[]");
                comments.push(comment);

                db.run(
                    `UPDATE posts SET comments = ? WHERE id = ?`,
                    [JSON.stringify(comments), post_id],
                    function (err) {
                        if (err) {
                            return res.status(500).json({ error: err.message });
                        }
                        res.json({ message: "Комментарий добавлен" });
                    }
                );
            });
        } catch (e) {
            console.log(e);
            res.status(500).json({ message: "Ошибка добавления комментария" });
        }
    }

    // Добавление книги для обмена
    async addSwapBook(req, res) {
        try {
            const { image, book_author, book_title, description } = req.body;
            const author_id = req.user.id; // Берем ID автора из токена

            const createdAt = new Date().toISOString();
            db.run(
                `INSERT INTO swap_books (author_id, created_at, image, book_author, book_title, description) VALUES (?, ?, ?, ?, ?, ?)`,
                [author_id, createdAt, image, book_author, book_title, description],
                function (err) {
                    if (err) {
                        return res.status(500).json({ error: err.message });
                    }
                    res.status(201).json({ id: this.lastID, message: "Книга для обмена добавлена" });
                }
            );
        } catch (e) {
            console.log(e);
            res.status(500).json({ message: "Ошибка добавления книги для обмена" });
        }
    }

    // Получение книги для обмена по ID
    async getSwapBookById(req, res) {
        try {
            const { id } = req.params;
            db.get(`SELECT * FROM swap_books WHERE id = ?`, [id], (err, row) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                res.json(row);
            });
        } catch (e) {
            console.log(e);
            res.status(500).json({ message: "Ошибка получения книги для обмена" });
        }
    }

    // Получение всех публикаций автора
    async getPublicationsByAuthor(req, res) {
        try {
            const { author_id } = req.params;
            db.all(
                `SELECT * FROM posts WHERE author_id = ? UNION ALL SELECT * FROM swap_books WHERE author_id = ?`,
                [author_id, author_id],
                (err, rows) => {
                    if (err) {
                        return res.status(500).json({ error: err.message });
                    }
                    res.json(rows);
                }
            );
        } catch (e) {
            console.log(e);
            res.status(500).json({ message: "Ошибка получения публикаций" });
        }
    }
}

module.exports = new postsController();
