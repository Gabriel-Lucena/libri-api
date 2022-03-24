/*
 * Importa o pacote sequelize
 */

const sequelize = require("sequelize");

/*
 * Cria uma constante nomeada como connection que vai
 * representar a instância de conexão do sequelize.
 *
 * Parâmetros de conexão:
 * 1 - Nome do banco de dados
 * 2 - Usuário do banco de dados
 * 3 - Senha do banco de dados
 * 4 -
 */

const connection = new sequelize(
  process.env.DB_NAME,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: "localhost:3306",
    dialect: "mysql",
  }
);

module.exports = connection;
