/**
 * Importa o pacote express para a aplicação
 */

const express = require("express");

/*
 * Importa o arquivo de usuário
 */
// const usuario = require("./model/User");

/**
 * Cria uma instância do pacote express
 * para ser utilizada na aplicação
 */

const app = express();
const porta = 3000;

/**
 * Importa a controller de usuário
 */

const router = require("./controller/UsuarioController");

/**
 * Configurações do express para manipular formato json
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

/**
 *  Instância do servidor (express)
 */

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
