const Router = require('express');
const router = new Router();
const controller = require('./postsController');
const authMiddleware = require('./middleware/authMiddleware');

router.post('/add', authMiddleware, controller.addPost);
router.get('/get-posts', controller.getAllPosts);
router.get('/get-post/:id', controller.getPostById);
router.post('/save-comment', authMiddleware, controller.addComment);
router.post('/add-swap-book', authMiddleware, controller.addSwapBook);
router.get('/get-swap-book/:id', controller.getSwapBookById);
router.get('/get-my-publications/:author_id', controller.getPublicationsByAuthor);

module.exports = router;
