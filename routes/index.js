var express = require('express');

/**
 * Entidade Router() será responsável pelas rotas
 */
var router = express.Router();

/**
 * GET na rota '/'
 */
router.get('/', function (req, res) {
   res.json("Servidor on");  
})

/**
 * Usando as rodas de dog.js
 */
router.use('/dog', require('./dog.js'));

/**
 * Usando as rotas de user.js
 */
router.use('/user', require('./user.js'))


/**
 * Exportando a rota pra quem quiser usar
 */
module.exports = router;