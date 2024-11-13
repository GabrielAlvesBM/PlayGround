const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const admin = require('./routes/admin');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

mongoose.connect('mongodb://localhost/blogapp').then(() => {
    console.log('Mongodb Conectado!');
}).catch((error) => {
    console.error('Erro ao conectar no mongodb: ' + error);
})

// Rotas
app.use('/admin', admin);

const PORT = 8080;
app.listen(PORT, () => {
    console.log('Servidor Rodando!');
});