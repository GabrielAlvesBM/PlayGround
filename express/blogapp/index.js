const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

const admin = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/admin', admin);

const PORT = 8080;
app.listen(PORT, () => {
    console.log('Servidor Rodando!');
});