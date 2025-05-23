const express = require('express');
const sensorT1Router = require('./sensorT1.router');

const router = express.Router();

// colocar las rutas aquí

    router.use(sensorT1Router)

module.exports = router;