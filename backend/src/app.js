const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const {errors} = require('celebrate');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());
/**
 * Tipos de parâmetros: 
 * 
 * Query Params => Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params => Parâmetros utilizados para identificar recursos (id,nome)
 * Request Body => Corpo da requisição, utilizado para atualizar recursos
 * 
*/




module.exports = app;