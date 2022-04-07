/*
 *  Importa o módulo do sequlize
 */

const Sequelize = require('sequelize');

/*
 *  Importa o arquivo de conexão com o banco de dados
 */

const connection = require('../database/database');

const Usuario = require('./Usuario');

const Livro = connection.define('tblLivro', {
  idLivro: {
    type: Sequelize.INTEGER(10),
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: Sequelize.STRING(200),
    allowNull: true,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  imagem: {
    type: Sequelize.STRING(500),
    allowNull: true,
  },
});

/*
 *  Implementação da chave estrangeira - lado n
 */

Usuario.hasMany(Livro);

/*
 *  Implementação da chave primária - lado 1
 */

Livro.belongsTo(Usuario);

// Livro.sync({ force: true });

module.exports = Livro;
