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

router.get('/livro/:idLivro', (req, res) => {
  let { id } = req.params;

  console.log('ID' + id);

  livro
    .findAll({
      where: {
        cod_livro: id,
      },
    })
    .then((livro) => {
      res.status(200).json(livro);
    });
});

router.post('/livro/', (req, res) => {
  const { titulo, descricao, imagem, tblUsuarioCodUsuario } = req.body;

  livro
    .create({
      titulo,
      descricao,
      imagem,
      tblUsuarioCodUsuario,
    })
    .then(() => {
      res.status(200).json({ MSG: 'Livro inserido com sucesso!' });
    });
});

router.put('/livro/', (req, res) => {
  const { titulo, descricao, imagem, tblUsuarioCodUsuario, cod_livro } = req.body;

  livro
    .update(
      {
        titulo,
        descricao,
        imagem,
        tblUsuarioCodUsuario,
      },
      { where: { cod_livro } },
    )
    .then(() => {
      res.status(200).json({ MSG: 'Livro editado com sucesso!' });
    });
});

router.delete('/livro/:idLivro', (req, res) => {
  const { cod_livro } = req.params;

  livro
    .destroy({
      where: { cod_livro },
    })
    .then(() => {
      res.status(200).json({ MSG: 'Livro excluído com sucesso!' });
    });
});

module.exports = router;
