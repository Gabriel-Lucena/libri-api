/* IMPORTA O MÓDULO DO express */
const express = require('express');

/* IMPORTA O MODEL DE CATEGORIA */
const usuario = require('../model/Usuario');

/* CONFIGURA A FUNCIONALIDA DE ROTAS  */
const router = express.Router();

router.get('/usuario/logarUsuario/:login/:senha', (req, res)=>{

    const { login, senha } = req.params;

    usuario.findAll({
        where:{
            login,
            senha
        }
    })
    .then(
            (usuario)=>{
                res.status(200).json(usuario);
            }       
    );

});

router.post('/usuario/cadastrarUsuario', (req, res)=>{

    const {nome, sobrenome, email, foto, login, senha} = req.body;

    usuario.create({
        nome, 
        sobrenome,
        email,
        foto,
        login,
        senha
    }).then(
        ()=>{
            res.status(200).json({"MSG": "USUÁRIO INSERIDO COM SUCESSO!"});
        }
    );

});

module.exports = router;