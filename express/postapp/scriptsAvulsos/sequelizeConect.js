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

/* const Postagens = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
}); */

/* sequelize.sync({ force: true }).then(() => {
  console.log("Tabela sincronizada.");
}); */

/* Postagens.create({
  titulo: "Titulo Aleatorio",
  conteudo: "lorem ypisilu lorem ypisilu lorem ypisilu lorem ypisilu lorem ypisilu lorem ypisilu lorem ypisilu"
}) */
