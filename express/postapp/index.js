const express = require('express');
const app = express();
const handlebars = require('express-handlebars').create({ 
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    } 
});
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
    Post.findAll().then((posts) => {
        res.render('home', { posts: posts });
    }).catch((error) => {
        res.send('Houve um erro: ' + error);
    });
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

app.get('/delete/:id', (req, res) => {
    Post.destroy({where: {id: req.params.id}})
    .then(() => {
        res.send('Deletado com Sucesso!');
    }).catch((error) => {
        res.send('Houve um erro' + error)
    })
});

app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000!');
});