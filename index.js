/**
 * Importa o pacote express para a aplicação
 */

const express = require("express");

/**
 * Cria uma instância do pacote express
 * para ser utilizada na aplicação
 */

const app = express();
const porta = 3000;


/**
 *  Instância do servidor (express)
 */

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
