const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { secret } = require("./config");
const db = require("./db");

const generateAccessToken = (id, roles) => {
	const payload = {
			id,
			roles
	};
	return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class authController {
	async registration(req, res) {
			try {
					const errors = validationResult(req);
					
					if (!errors.isEmpty()) {
							return res.status(400).json({ message: "Ошибка при регистрации", errors });
					}
					const { username, password, email, phone } = req.body;
					
					db.get(`SELECT * FROM users WHERE username = ? OR email = ?`, [username, email], async (err, row) => {
							if (row) {
									return res.status(400).json({ message: "Пользователь с таким именем или почтой уже существует" });
							} else {
									const hashPassword = bcrypt.hashSync(password, 7);
									const avatar = ""
									const books_to_read = JSON.stringify([]);
									const books_read = JSON.stringify([]);
									const books_reading = JSON.stringify([]);
									const roles = JSON.stringify(["USER"]);

									db.run(`
											INSERT INTO users (username, phone, email, password, avatar, books_to_read, books_read, books_reading, roles) 
											VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
									`, [username, phone, email, hashPassword, avatar, books_to_read, books_read, books_reading, roles], function(err) {
											if (err) {
													return res.status(400).json({ message: "Ошибка при регистрации" });
											}
											return res.json({ message: "Пользователь успешно зарегистрирован" });
									});
							}
					});
			} catch (e) {
					console.log(e);
					res.status(400).json({ message: "Registration error" });
			}
	}

	async login(req, res) {
			try {
					const { email, password } = req.body;

					db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
							if (!user) {
									return res.status(400).json({ message: "Неверный логин или пароль" });
							}
							const validPassword = bcrypt.compareSync(password, user.password);
							if (!validPassword) {
									return res.status(400).json({ message: "Неверный логин или пароль" });
							}

							const roles = JSON.parse(user.roles);
							const token = generateAccessToken(user.id, roles);
							return res.json({ token });
					});
			} catch (e) {
					console.log(e);
					res.status(400).json({ message: "Login error" });
			}
	}

	async getUsers(req, res) {
			try {
					db.all(`SELECT * FROM users`, [], (err, rows) => {
							if (err) {
									return res.status(400).json({ message: "Ошибка получения пользователей" });
							}
							res.json(rows);
					});
			} catch (e) {
					console.log(e);
					res.status(400).json({ message: "Ошибка" });
			}
	}
}

module.exports = new authController();
