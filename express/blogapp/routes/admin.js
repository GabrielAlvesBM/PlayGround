const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Página Admin');
});

router.get('/posts', (req, res) => {
    res.send('Página Admin/Posts');
});

router.get('/categories', (req, res) => {
    res.send('Páginda Admin/Categories');
});

module.exports = router;