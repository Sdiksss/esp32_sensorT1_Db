const express = require('express');
const sensorT1Router = require('./sensorT1.router');
const AlcoholRouter = require('./Alcohol');

const router = express.Router();

// colocar las rutas aquí

    router.use(sensorT1Router)
    router.use(AlcoholRouter)

module.exports = router;