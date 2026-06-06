var database = require("../database/config");

    function listarSensores(idEmpresa){
        var instrucaoSql = `select * from vw_sensoresPorEmpresa where idEmpresa = ${idEmpresa};`
        return database.executar(instrucaoSql);
    }

module.exports = {
    listarSensores
}