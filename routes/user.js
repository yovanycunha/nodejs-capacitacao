const express = require('express');

const router = express.Router();

/**
 * Rodando o verbo GET no endpoint '/'
 * Essa é a rota principal
 */
router.get('/', function (req, res) {
    res.json('USEEEEEEEEERS');
});

/**
* Rodando o verbo POST no endpoint '/'
*/
router.post('/', function(req, res) {
    res.json("Vc fez um post de user");
});

module.exports = router