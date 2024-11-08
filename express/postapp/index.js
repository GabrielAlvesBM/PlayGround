const express = require('express');
const app = express();
const handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
const bodyParser = require('body-parser');

// Config
    // Template Engine
        app.engine('handlebars', handlebars.engine);
        app.set('view engine', 'handlebars');

    // Body Parser
        // app.use(bodyParser.urlencoded({ extend: false }));
        app.use(bodyParser.json());

app.get('/cad', (req, res) => {
    res.render('formulario');
});

app.post('/add', (req, res) => {

    res.send(`Titulo: ${ req.body.titulo } Conteúdo: ${ req.body.conteudo }` + 'Formulário Recebido!');
});

app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000!');
});