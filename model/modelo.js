class Anotacao {
    constructor(id, titulo, descricao, data, tag, lida = false) {
        this._id = id;
        this._titulo = titulo;
        this._descricao = descricao;
        this._data = data;
        this._tag= tag;
        this._lida = lida;
    }

    get id() {
        return this._id;
    }
    get titulo() {
        return this._titulo;
    }
    get descricao() {
        return this._descricao;
    }
    get data(){
        return this._data;
    }
    get tag() {
        return this._tag;
    }
    get lida(){
        return this._lida;
    }
    
    set titulo(novoTitulo) {
        this._titulo = novoTitulo;
    }
    set descricao(novaDescricao) {
        this._descricao = novaDescricao;
    }
    set tag(novaTag) {
        this._tag = novaTag;
    }
    set lida(novoStatus){
        this._lida = novoStatus;
    }
}

module.exports = Anotacao;