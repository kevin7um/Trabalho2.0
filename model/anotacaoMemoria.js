var Anotacao = require("./modelo.js")

const lista_anotacoes = [];

class AnotacaoMemoria {
    filtro = "";

    async atualiza(id, titulo, descricao, data, tag, lida) {
        lista_anotacoes[id] = new Anotacao(id, titulo, descricao, data, tag, lida)
        return lista_anotacoes[id];
    }

    async cria(id, titulo, descricao, data,tag) {
        lista_anotacoes[id] = new Anotacao(id, titulo, descricao, data, tag)
        return lista_anotacoes[id]
    }

    async consulta(id) {
        if (lista_anotacoes[id]) return lista_anotacoes[id];
        else throw new Error(`Anotação com o id ${id} não existe`);
    }

    async deleta(id) {
        if (lista_anotacoes[id]) {
            delete lista_anotacoes[id]
        } else throw new Error(`Anotação com o id ${id} não existe`);
    }

    async lista() {
        return Object.values(lista_anotacoes)
    }

    async lista_ids() {
        return Object.keys(lista_anotacoes)
    }

    async filtro_tag(tag){
        if(tag == "Todas"){
            return Object.values(lista_anotacoes);
        }
        else{
            const lista = lista_anotacoes.filter((item) => {
                return item._tag.includes(tag)
            })
            return Object.values(lista)
        }
    }

    async qtd() {
        return lista_anotacoes.length
    }
}

var anotacoes = new AnotacaoMemoria()
module.exports = anotacoes
