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
    Category.find().sort({ date: 'desc' }).then((categories) => {
        res.render('admin/categories', { categories: categories });
    })
    .catch(() => {
        res.flash('error_msg', 'Houve um erro ao listar as categorias');
        res.redirect('/admin');
    }) 
});

router.get('/categories/add', (req, res) => {
    res.render('admin/addcategories');
});

router.post('/categories/new', (req, res) => {
    let errors = []

    if (!req.body.name || typeof req.body.name == undefined || req.body.name == null ) {
        errors.push({ text: 'Nome Invalido' });
    };

    if (!req.body.slug || typeof req.body.slug == undefined || req.body.name == null) {
        errors.push({ text: 'Slug Invalido' });
    };

    if (req.body.name.length < 2) {
        errors.push({ text: 'Nome muito curto' });
    };

    if (req.body.slug.length < 2) {
        errors.push({ text: 'Slug muito curto' });
    };

    if (errors.length > 0) {
        res.render('admin/addcategories', {errors: errors});
    } else {
        const newCategorie = {
            name: req.body.name,
            slug: req.body.slug
        };
    
        new Category(newCategorie).save().then(() => {
            console.log('Categoria salva com sucesso!');
            req.flash('success_msg', 'Categoria criada com sucesso!');
            res.redirect('/admin/categories');
        })
        .catch((error) => {
            req.flash('error_msg', 'Houve um erro ao salvar a categoria, tente novamente!')
            res.redirect('/admin');
        })
    }
});

router.get('/categories/edit/:id', (req, res) => {
    Category.findOne({ _id: req.params.id }).then((category) => {
        res.render('admin/editcategories', { category: category });
    })
    .catch(() => {
        req.flash('error_msg', 'Essa categoria não existe');
        res.redirect('/admin/categories');
    })
});

router.post('/categories/edit', (req, res) => {
    Category.findOne({ _id: req.body.id }).then((category) => {
        category.name = req.body.name;
        category.slug = req.body.slug;

        category.save().then(() => {
            req.flash('success_msg', 'Categoria editada com sucesso!');
            res.redirect('/admin/categories');
        })
        .catch((error) => {
            req.flash('error_msg', 'Houve um erro interno ao salvar a edição da categoria');
            res.redirect('/admin/categories');
        })
    })
    .catch(() => {
        req.flash('error_msg', 'Houve um erro ao editar categoria');
        res.redirect('/admin/categories');
    });


});

module.exports = router;