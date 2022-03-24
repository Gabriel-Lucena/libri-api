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

const connection = new sequelize("libri", "root", "12345678", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
