const express = require('express');
const app = express();
const handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
const bodyParser = require('body-parser');

const Post = require('./models/Post');

// Config
    // Template Engine
        app.engine('handlebars', handlebars.engine);
        app.set('view engine', 'handlebars');

    // Body Parser
        app.use(bodyParser.urlencoded({ extend: false }));
        app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/cad', (req, res) => {
    res.render('formulario');
});

app.post('/add', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/');
    }).catch((error) => {
        res.send('Houve um erro: ' + error);
    });
});

app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000!');
});