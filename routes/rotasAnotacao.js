var express = require('express');

var router = express.Router();

var controllerAnotacao = require('../controller/controllerAnotacao.js')

router.get('/cria', controllerAnotacao.cria_get);

router.post('/cria', controllerAnotacao.cria_post);

router.get('/consulta/:id_anotacao', controllerAnotacao.consulta);

router.get('/altera/:id_anotacao', controllerAnotacao.altera_get);

router.post('/altera/:id_anotacao', controllerAnotacao.altera_post);

router.get('/deleta/:id_anotacao', controllerAnotacao.deleta);

router.get('/lida/:id_anotacao', controllerAnotacao.lida);

router.get('/nao_lida/:id_anotacao', controllerAnotacao.nao_lida);

module.exports = router;
