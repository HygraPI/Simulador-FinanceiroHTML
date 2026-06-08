var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    FROM medida
                    WHERE fk_aquario = ${idAquario}
                    ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimaLeitura(idSensor) {

    var instrucaoSql = `
        SELECT 
            umidade,
            dtLeitura
        FROM leitura
        WHERE fkSensor = ${idSensor} AND
        fkAlerta IS NOT NULL
        ORDER BY dtLeitura DESC
        LIMIT 1;
    `;

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

function buscarSensor(idSensor){

    var instrucaoSql = `
        SELECT idSensor
        FROM sensor
        WHERE idSensor = ${idSensor};
    `;

    return database.executar(instrucaoSql);

}

function buscarUltimoAlerta(idSensor) {

    var instrucaoSql = `SELECT dtLeitura FROM leitura WHERE fkSensor = 8 AND fkAlerta IS NOT NULL ORDER BY dtLeitura DESC LIMIT 1;`;

    console.log("Executando SQL:\n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

function buscarTipoTecido(idSensor) {

    var instrucaoSql = `
        SELECT t.nome
        FROM sensor s
        JOIN lugar l
            ON s.fkLugar = l.idLugar
        JOIN tecido t
            ON l.fkTecido = t.idTecido
        WHERE s.idSensor = ${idSensor};
    `;

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

function buscarGraficoUmidade(idSensor) {

    var instrucaoSql = `

        SELECT
            leitura.umidade,
            DATE_FORMAT(leitura.dtLeitura, '%H:%i:%s') AS horario,
            tecido.minUmidade,
            tecido.maxUmidade
        FROM leitura
        JOIN sensor
            ON leitura.fkSensor = sensor.idSensor
        JOIN lugar
            ON sensor.fkLugar = lugar.idLugar
        JOIN tecido
            ON lugar.fkTecido = tecido.idTecido
        WHERE sensor.idSensor = ${idSensor}
        ORDER BY leitura.dtLeitura DESC
        LIMIT 7;

    `;

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);

}

function buscarTempoForaFaixa(idSensor) {

    var instrucaoSql = `
         SELECT
            DATE(dtLeitura) AS dia,
            COUNT(distinct hour(dtLeitura)) AS horasFora
        FROM leitura l
        JOIN sensor s
            ON l.fkSensor = s.idSensor
        JOIN lugar lu
            ON s.fkLugar = lu.idLugar
        JOIN tecido t
            ON lu.fkTecido = t.idTecido
        WHERE
            s.idSensor = ${idSensor}
            AND (
                l.umidade < t.minUmidade
                OR
                l.umidade > t.maxUmidade
            )
        GROUP BY DATE(dtLeitura)
        ORDER BY DATE(dtLeitura);
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimaLeitura,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarSensor,
    buscarUltimoAlerta,
    buscarTipoTecido,
    buscarGraficoUmidade,
    buscarTempoForaFaixa
}