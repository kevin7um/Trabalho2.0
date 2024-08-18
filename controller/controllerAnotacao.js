const anotacoes = require('../model/anotacaoMemoria.js');

var incremento=1;
function incrementando(){
    return incremento++
}

async function verificaAnotacaoExiste(id){
    let ids= await anotacoes.lista_ids()
    return ids.includes(id.toString()) 
}

exports.cria_get = async function (req, res) {
    contexto = {
        titulo_pagina: "Criar Anotação",
        idInc: incremento
    }
    
    res.render('criaAnotacao', contexto);
}


exports.cria_post = async function (req, res) {
    let id = incrementando()
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    let data = new Date()
    let tag = req.body.tag

    await anotacoes.cria(id, titulo, descricao, data, tag);
    
    res.redirect('/');
}

exports.consulta = async function (req, res) {
    let id = req.params.id_anotacao;

    if (!(await verificaAnotacaoExiste(id))) {
        return res.render('erroAnotacao', { mensagem: `Anotação com o id ${id} não foi encontrada.` });
    }
    let anotacao = await anotacoes.consulta(id);
    let dataFormatada = anotacao.data.toLocaleDateString('pt-BR');

    console.log(await anotacoes.lista_ids())

    contexto = {
        titulo_pagina: "Visualizar Anotação",
        id: anotacao.id,
        titulo: anotacao.titulo,
        descricao: anotacao.descricao,
        data: dataFormatada,
        tag: anotacao.tag,
        lida: anotacao.lida
    }

    // renderiza o arquivo dentro da pasta view
    res.render('consultaAnotacao', contexto);
}

exports.altera_get = async function (req, res) {
    let id = req.params.id_anotacao
    if (!(await verificaAnotacaoExiste(id))) {
        return res.render('erroAnotacao', { mensagem: `Anotação com o id ${id} não foi encontrada.` });
    }

    let anotacao = await anotacoes.consulta(id);
    contexto = {
        titulo_pagina: "Editar Anotação",
        id: anotacao.id,
        titulo: anotacao.titulo,
        descricao: anotacao.descricao,
        tagSelecionada: anotacao.tag,
        lida: anotacao.lida
    }
    // renderiza o arquivo dentro da pasta view
    res.render('alteraAnotacao', contexto);
}

exports.altera_post = async function (req, res) {

    // obtém as informações do formulário
    let id = req.params.id_anotacao
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    let tag = req.body.tag
    let status

    if(req.body.lida == 'on'){
        status = true;
    }
    else{
        status = false;
    }
    if (!(await verificaAnotacaoExiste(id))) {
        return res.render('erroAnotacao', { mensagem: `Anotação com o id ${id} não foi encontrada.` });
    }
    let anotacao = await anotacoes.consulta(id);

    await anotacoes.atualiza(id, titulo, descricao, anotacao.data, tag, status);

    res.redirect('/');
}

exports.deleta = async function (req, res) {
    let id = req.params.id_anotacao
    if (!(await verificaAnotacaoExiste(id))) {
        return res.render('erroAnotacao', { mensagem: `Anotação com o id ${id} não foi encontrada.` });
    }
    await anotacoes.deleta(id);

    res.redirect('/');
}

exports.lida = async function(req, res) {
    let id = req.params.id_anotacao;
    let anotacao = await anotacoes.consulta(id);
    anotacao.lida = true;

    let urlReq = req.get('referer');
    res.redirect(urlReq);
}

exports.nao_lida = async function(req, res) {
    let id = req.params.id_anotacao;
    let anotacao = await anotacoes.consulta(id);
    anotacao.lida = false;
    
    let urlReq = req.get('referer');
    res.redirect(urlReq);
}

exports.tag_pessoal = async function(req, res){
    let id = req.params.id_anotacao;
    let anotacao = await anotacoes.consulta(id);
    anotacao.tag = "Trabalho";
    
    let urlReq = req.get('referer');
    res.redirect(urlReq);
}

exports.tag_trabalho = async function(req, res){
    let id = req.params.id_anotacao;
    let anotacao = await anotacoes.consulta(id);
    anotacao.tag = "Curso";
    
    let urlReq = req.get('referer');
    res.redirect(urlReq);
}

exports.tag_curso = async function(req, res){
    let id = req.params.id_anotacao;
    let anotacao = await anotacoes.consulta(id);
    anotacao.tag = "Lazer";
    
    let urlReq = req.get('referer');
    res.redirect(urlReq);
}

exports.tag_lazer = async function(req, res){
    let id = req.params.id_anotacao;
    let anotacao = await anotacoes.consulta(id);
    anotacao.tag = "Pessoal";
    
    let urlReq = req.get('referer');
    res.redirect(urlReq);
}
