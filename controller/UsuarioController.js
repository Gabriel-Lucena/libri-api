/*
 * Importa o módulo do express
 */

const express = require('express');

/*
 * Importa o model de categoria
 */

const usuario = require('../model/Usuario');

/*
 * Configura a funcionalidade de rotas
 */

const router = express.Router();

router.get('/usuario/logarUsuario/:login/:senha', (req, res) => {
  const { login, senha } = req.params;

  usuario
    .findAll({
      where: {
        login,
        senha,
      },
    })
    .then((usuario) => {
      res.status(200).json(usuario);
    });
});

router.post('/usuario/', (req, res) => {
  const { nome, sobrenome, email, foto, login, senha } = req.body;

  usuario
    .create({
      nome,
      sobrenome,
      email,
      // foto,
      foto: "Teste de imagem" || foto,
      login,
      senha,
    })
    .then(() => {
      res.status(200).json({ MSG: 'Usuário inserido com sucesso!' });
    });
});

module.exports = router;
