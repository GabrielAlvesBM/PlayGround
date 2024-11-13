const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/Category');
const Category = mongoose.model('categories')

router.get('/', (req, res) => {
    res.render('admin/index');
});

router.get('/posts', (req, res) => {
    res.send('Página Admin/Posts');
});

router.get('/categories', (req, res) => {
    res.render('admin/categories');
});

router.get('/categories/add', (req, res) => {
    res.render('admin/addcategories');
});

router.post('/categories/new', (req, res) => {
    const newCategorie = {
        name: req.body.name,
        slug: req.body.slug
    };

    new Category(newCategorie).save().then(() => {
        console.log('Categoria salva com sucesso!');
        res.send('Categoria salva com sucesso!');
    }).catch((error) => {
        console.error('Erro ao cadastrar categoria: ' + error);
        res.send('Erro ao cadastrar categoria: ' + error);
    })
});

module.exports = router;