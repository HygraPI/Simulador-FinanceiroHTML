var database = require("../database/config");

function umidadeIdeal(idAquario, limite_linhas) {

    var instrucaoSql = ``;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
