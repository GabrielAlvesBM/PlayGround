const mongoose = require('mongoose');

async function mongoConnect() {
    mongoose.Promise = global.Promise;
    await mongoose.connect('mongodb://localhost/scriptsAvulsos')
    .then(() => {
        console.log('Mongodb Conectado com sucesso!');
    }).catch((error) => {
        console.error('Erro ao conectar ao mongodb: ' + error);
    });
};

mongoConnect();

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    surname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    country: {
        type: String
    }
});

const User = mongoose.model('user', UserSchema);

/* const gabriel = new User({
    name: 'Anonimous Man',
    surname: 'da Silva',
    email: 'sla@gmail.com',
    age: 25
}).save().then(() => {
    console.log('User cadastrado com sucesso!');
}).catch((error) => {
    console.error('Erro ao cadastrar user: ' + error);
});

console.log(gabriel); */