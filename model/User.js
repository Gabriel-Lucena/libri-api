/*
 * Importa o pacote sequelize
 */

const sequelize = require("sequelize");

/*
 * Importa o arquivo de conexão com o banco de dados
 */

const connection = require("..database/database");

/*
 *  Representa o modelo da tabela de dados de usuário
 *  define - cria a representação da tabela.
 *  Parâmetros:
 *  1 - Nome da tabela
 *  2 - Objeto JSON que vai conter os campos da tabela, seus
 *  tipos e regras
 */

const User = connection.define("tblUsuario", {
  idUsuario: {
    type: sequelize.INTEGER(10),
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: sequelize.STRING(500),
    allowNull: false,
  },
  sobrenome: { type: sequelize.STRING(500), allowNull: false },
  email: { type: sequelize.STRING(500), allowNull: false },
  foto: { type: sequelize.STRING(500), allowNull: false },
  login: { type: sequelize.STRING(50), allowNull: false },
  senha: { type: sequelize.STRING(50), allowNull: false },
});

User.sync({ force: true });

module.exports = User;
