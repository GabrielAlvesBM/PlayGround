const Sequelize = require('sequelize');
const sequelize = new Sequelize('testes', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate().then(() => {
  console.log('Conectado ao MySql com sucesso!');
}).catch((error) => {
  console.error('Falha de conexão do MySql: ' + error);
});