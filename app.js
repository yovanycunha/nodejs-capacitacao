/**
 * importando o expresss
 */
var express = require('express');

/**
 * Permite que receba json 
 */
var bodyParser = require('body-parser');

/**
 * iniciando o express
 */
var app = express();

app.use(bodyParser.json());

/**
 * Redirecionando para o arquivo index.js a responsabilidade
 * pela rota
 */
app.use('/', require('./routes/index.js'));

/**
 * porta para a app
 */
app.listen(8000);
