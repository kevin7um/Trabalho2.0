const anotacoes = require('../model/anotacaoMemoria.js')

exports.tela_principal = async function (req, res) {

    contexto = {
        titulo_pagina: "Gestor de Anotações",
        anotacoes: await anotacoes.lista(),
    }
    
    res.render('index', contexto);
}

exports.tela_sobre = async function (req, res) {

    contexto = {
        titulo_pagina: "Sobre a Aplicação",
    }
    
    res.render('sobre', contexto);
}
