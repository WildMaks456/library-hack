const express = require('express');
const cors = require('cors');
const authRouter = require('./authRouter');
const postsRouter = require('./postsRouter');
const booksRouter = require('./booksRouter');
const db = require('./db');

const PORT = process.env.PORT || 5000;

const app = express();


app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/posts", postsRouter);
app.use('/books', booksRouter)

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};

start();
