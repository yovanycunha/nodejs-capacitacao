const express = require('express');

const router = express.Router();

/**
 * Invocando métodos definidos em dogController
 */
const dogController = require('../controllers/dog.controller.js')();

router.get('/', dogController.listarDog)

router.post('/', dogController.criarDog);

router.delete('/', dogController.apagarDog);

module.exports = router;