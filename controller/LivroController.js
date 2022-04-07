/* IMPORTA O MÓDULO DO express */
const express = require('express');

/* IMPORTA O MODEL DE LIVRO */
const livro = require('../model/Livro');

/* CONFIGURA A FUNCIONALIDA DE ROTAS  */
const router = express.Router();

router.get('/livro/listarLivro', (req, res)=>{

    livro.findAll()
        .then(
                (livros)=>{
                    res.status(200).json(livros);
                }       
        );

});

router.get('/livro/listarLivroId/:id', (req, res)=>{

    let { id } = req.params;

    console.log("ID" + id);

    livro.findAll({
        where:{
            cod_livro: id
        }
    })
            .then(
                (livro)=>{
                    res.status(200).json(livro);
                }       
        );

})

router.post('/livro/cadastrarLivro', (req, res)=>{

    const { titulo, descricao, imagem, tblUsuarioCodUsuario } = req.body;

    livro.create({
        titulo, 
        descricao,
        imagem,
        tblUsuarioCodUsuario
    }).then(
        ()=>{
            res.status(200).json({"MSG": "LIVRO INSERIDO COM SUCESSO!"});
        }
    );

});

router.put('/livro/alterarLivro', (req, res)=>{

    const { titulo, descricao, imagem, tblUsuarioCodUsuario, cod_livro } = req.body;

    livro.update({
        titulo, 
        descricao,
        imagem,
        tblUsuarioCodUsuario},
        {where: {cod_livro}}
        ).then(
        ()=>{
            res.status(200).json({"MSG": "LIVRO ALTERADO COM SUCESSO!"});
        }
    );

});

router.delete('/livro/excluirLivro/:cod_livro', (req, res)=>{

    const { cod_livro } = req.params;

    livro.destroy({
        where: {cod_livro}}
        ).then(
        ()=>{
            res.status(200).json({"MSG": "LIVRO EXCLUÍDO COM SUCESSO!"});
        }
    );

});

module.exports = router;