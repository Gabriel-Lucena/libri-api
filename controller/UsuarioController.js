const express = require("express");
const usuario = require("../model/User");

/*
 * Cria a instância de rotas
 */

const router = express.Router();

/*
 *   Cria as rotas
 */

/*
 *  Rota de inserção
 *
 *  O router é capaz de receber requisições de verbos
 *  HTTP.
 *
 *  Parâmetros:
 *  1 - Uma string representando a rota em si;
 *  2 - Um callback que trata a requisição (req) e
 *  a resposta (res)
 */

router.post("/usuario/inserir/", (req, res) => {
  res.status(200).json({ Message: "Rota de inserção de usuário" });
});

module.exports = router;
