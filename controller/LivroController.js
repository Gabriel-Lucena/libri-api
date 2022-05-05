/*
 * Importa o módulo do express
 */

const express = require('express');

/*
 * Importa o model de livro
 */

const livro = require('../model/Livro');

/*
 * Configura a funcionalidade de rotas
 */

const router = express.Router();

router.get('/livro/', (req, res) => {
  livro.findAll().then((livros) => {
    res.status(200).json(livros);
  });
});

router.get('/livro/id/:idLivro', (req, res) => {
  let { idLivro } = req.params;

  console.log('ID' + idLivro);

  livro
    .findAll({
      where: {
        idLivro: idLivro,
      },
    })
    .then((livro) => {
      res.status(200).json(livro);
    });
});

router.post('/livro/', (req, res) => {
  const { titulo, descricao, imagem, idUsuario } = req.body;

  livro
    .create({
      titulo,
      descricao,
      imagem,
      idUsuario,
    })
    .then(() => {
      res.status(200).json({ MSG: 'Livro inserido com sucesso!' });
    });
});

router.put('/livro/', (req, res) => {
  const { titulo, descricao, imagem, idLivro } = req.body;

  livro
    .update(
      {
        titulo,
        descricao,
        imagem,
      },
      { where: { idLivro } },
    )
    .then(() => {
      res.status(200).json({ MSG: 'Livro editado com sucesso!' });
    });
});

router.delete('/livro/:idLivro', (req, res) => {
  const { idLivro } = req.params;

  livro
    .destroy({
      where: { idLivro },
    })
    .then(() => {
      res.status(200).json({ MSG: 'Livro excluído com sucesso!' });
    });
});

module.exports = router;
