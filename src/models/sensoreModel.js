var database = require("../database/config");

    function listarSensores(){
        var instrucaoSql = `select * from vw_sensores;`
        return database.executar(instrucaoSql);
    }

module.exports = {
    listarSensores
}