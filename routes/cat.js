const express = require('express');

const router = express.Router();


const catController = require("../controllers/catController.js")();

router.get('/', catController.listarCat);

router.post('/', catController.criarCat);

router.delete('/', catController.removerCat);

module.exports = router;