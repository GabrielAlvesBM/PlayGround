const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testes'
});

connection.connect((error) => {
  if (error) {
    console.error('Erro ao conectar mysql: ' + error);
    return;
  }
  console.log('Conectado ao mysql com sucesso!');
});

connection.query('SELECT * FROM usuarios', (error, result) => {
  if (error) {
    console.error('Erro na consulta: ' + error);
    return;
  }
  console.log('Resultado da consulta: ' + JSON.stringify(result, null, 2));
});

connection.end();