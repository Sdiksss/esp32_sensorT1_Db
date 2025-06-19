const { getAll, create, getOne, remove, update } = require('../controllers/alcoholT2.controllers');
const express = require('express');

const AlcoholRouter = express.Router();

AlcoholRouter.route('/Alcohol')
    .get(getAll)
    .post(create);

AlcoholRouter.route('/Alcohol/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = AlcoholRouter;