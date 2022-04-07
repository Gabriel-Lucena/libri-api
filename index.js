/*
 * Importações de pacotes
 */

const express = require('express');

/*
 *Instâncias de pacotes
 */
// express:

const app = express();

/*
 * Configura o express para lidar com dados no formato json
 */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
 * Importa e configura os arquivos de rotas de usuários
 */

const usuarioController = require('./controller/UsuarioController');
app.use('/', usuarioController);

/*
 * Importa e configura os arquivos de rotas de livros
 */

const livroController = require('./controller/LivroController');
app.use('/', livroController);

/*
 * Instância do servidor ( express )
 */

app.listen(3000, () => {
  console.log('Server listening on port: http://localhost:3000');
});
