

const express = require('express');
const routes = express.Router();
const { GetAll, GetById, Update, AddNew, Delete } = require('../controllers/product');


routes.get('/', GetAll);
routes.get('/:id', GetById);
routes.put('/:id', Update);
routes.post('/', AddNew);
routes.delete('/:id', Delete);

module.exports = routes;
