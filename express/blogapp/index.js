const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');

const admin = require('./routes/admin');

app.use(session({
    secret: 'Secret Secreta porra!',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine(
  "handlebars",
  handlebars.engine({
    defaultLayout: "main",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);
app.set('view engine', 'handlebars');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/blogapp').then(() => {
    console.log('Mongodb Conectado!');
})
.catch((error) => {
    console.error('Erro ao conectar no mongodb: ' + error);
})

app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/admin', admin);

const PORT = 8080;
app.listen(PORT, () => {
    console.log('Servidor Rodando!');
});