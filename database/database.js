/* IMPORTA O MÓDULO DO SEQUELIZE */
const Sequelize = require('sequelize');

/* 
CRIA UMA CONSTANTE "connection" QUE GUARDA UMA INSTANCIA DO sequelize E ABRE A 
CONEXÃO COM O BANCO DE DADOS;
PARAMETROS:
1 - NOME DO BANCO DE DADOS
2 - USUÁRIIO DO BANCO DE DADOS
3 - SENHA DO BANCO DE DADOS
4 - OBJETO JSON QUE DETERMINA O LOCAL ONDE O BANCO DE DADOS ESTÁ LOCALIZADO E SEU TIPO
*/
const connection = new Sequelize('libri', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

/* EXPORTA A CONSTANTE connection TORNANDO ESSA DISPONÍVEL EM TODA A APLICAÇÃO */
module.exports = connection;