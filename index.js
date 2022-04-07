/* IMPORTAÇÕES DE PACOTES */
const express = require('express');

/* INSTANCIAS DE PACOTES */
//express:
const app = express();

/* CONFIGURA O EXPRESS PARA LIDAR COM DADOS NO FORMATO JSON */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* IMPORTA E CONFIGURA OS ARQUIVOS DE ROTAS DE USUÁRIOS */
const usuarioController = require('./controller/UsuarioController');
app.use('/', usuarioController);

/* IMPORTA E CONFIGURA OS ARQUIVOS DE ROTAS DE LIVROS*/
const livroController = require('./controller/LivroController');
app.use('/', livroController);

/* INSTANCIA DO SERVIDOR (express) */
app.listen(3000, ()=>{ 
    console.log('SERVIDOR RODANDO NA URL: http://localhost:3000'); 
});