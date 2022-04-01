const express = require("express");
const usuario = require("../database/model/User");

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
  console.log(req.body);

  const { nome, sobrenome, email, foto, login, senha } = req.body;

  usuario
    .create({
      nome,
      sobrenome,
      email,
      foto,
      login,
      senha,
    })
    .then(() => {
      res.status(200).json("Usuário inserido com sucesso!");
    });
});

module.exports = router;
