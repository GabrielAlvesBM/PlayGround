const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

require('../models/User');
const User = mongoose.model('users');

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', (req, res) => {
    let errors = [];

    if (!req.body.name || typeof req.body.name === undefined || req.body.name === null) {
        errors.push({ text: 'Nome Invalido!' });
    };

    if (!req.body.email || typeof req.body.email === undefined || req.body.email === null) {
        errors.push({ text: 'E-mail Invalido!' });
    };

    if (!req.body.password || typeof req.body.password === undefined || req.body.password === null) {
        errors.push({ text: 'Senha Invalida!' });
    };

    if (req.body.password.length < 4) {
        errors.push({ text: 'Senha muito curta!' });
    };

    if (req.body.password != req.body.confirmPassword) {
        errors.push({ text: 'As senhas são diferentes, tente novamente!' });
    };

    if (errors.length > 0) {
        res.render('users/register', { errors: errors });
    } else {

    }
});

module.exports = router;