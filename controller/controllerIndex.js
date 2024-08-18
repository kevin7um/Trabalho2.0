const anotacoes = require('../model/anotacaoMemoria.js')

exports.tela_principal = async function (req, res) {

    contexto = {
        titulo_pagina: "Gestor de Anotações",
        anotacoes: await anotacoes.lista(),
        filtro: false,
    }
    
    res.render('index', contexto);
}

exports.tela_sobre = async function (req, res) {

    contexto = {
        titulo_pagina: "Sobre a Aplicação",
    }
    
    res.render('sobre', contexto);
}

exports.filtro_tag_post = async function(req, res) {
    let tag = req.body.tag;

    anotacoes.filtro = tag;

    res.redirect('/filtro')
}

exports.filtro_tag_get = async function(req, res) {
    let tag = anotacoes.filtro;

    contexto = {
        titulo_pagina: `Anotações de: ${tag}`,
        anotacoes: await anotacoes.filtro_tag(tag),
        filtro: true,
        tag: tag,
    }
    
    res.render('index', contexto);
}
