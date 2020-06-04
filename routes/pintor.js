const express = require('express');
//Ahora vamos a routear a los pintores
let pintor = require('../controllers/PintoresController.js');

// creamos nuestras rutas
let router = express.Router();

router.get('/', pintor.list);

module.exports = router;