var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idAquario = req.params.idAquario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idAquario = req.params.idAquario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarSensor(req, res) {

    var idSensor = req.params.idSensor;

    medidaModel.buscarSensor(idSensor)
        .then(function(resultado) {

            if(resultado.length > 0){
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum sensor encontrado");
            }

        }).catch(function(erro){

            console.log(erro);
            res.status(500).json(erro.sqlMessage);

        });

}

function buscarUltimaLeitura(req, res) {

    var idSensor = req.params.idSensor;

    medidaModel.buscarUltimaLeitura(idSensor)
    .then(function(resultado){

        res.json(resultado);

    }).catch(function(erro){

        console.log(erro);
        res.status(500).json(erro.sqlMessage);

    });

}

function buscarUltimoAlerta(req, res) {

    var idSensor = req.params.idSensor;

    medidaModel.buscarUltimoAlerta(idSensor)
        .then(function(resultado) {

            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum alerta encontrado");
            }

        }).catch(function(erro) {

            console.log(erro);
            res.status(500).json(erro.sqlMessage);

        });
}

function buscarTipoTecido(req, res) {

    var idSensor = req.params.idSensor;

    medidaModel.buscarTipoTecido(idSensor)
        .then(function(resultado) {

            if (resultado.length > 0) {

                res.status(200).json(resultado);

            } else {

                res.status(204).send("Nenhum tecido encontrado");

            }

        }).catch(function(erro) {

            console.log(erro);
            res.status(500).json(erro.sqlMessage);

        });

}

function buscarGraficoUmidade(req, res) {

    var idSensor = req.params.idSensor;

    medidaModel.buscarGraficoUmidade(idSensor)
        .then(function(resultado) {

            res.status(200).json(resultado);

        }).catch(function(erro) {

            console.log(erro);
            res.status(500).json(erro.sqlMessage);

        });

}

function buscarTempoForaFaixa(req, res) {

    var idSensor = req.params.idSensor;

    medidaModel.buscarTempoForaFaixa(idSensor)
        .then(function(resultado) {

            res.status(200).json(resultado);

        }).catch(function(erro) {

            console.log(erro);
            res.status(500).json(erro.sqlMessage);

        });

}

function umidadeDoLugar(req, res) {

    var idSensor = req.params.idSensor;

    medidaModel.umidadeDoLugar(idSensor)
        .then(function(resultado) {

            res.status(200).json(resultado);

        }).catch(function(erro) {

            console.log(erro);
            res.status(500).json(erro.sqlMessage);

        });

}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarSensor,
    buscarUltimaLeitura,
    buscarUltimoAlerta,
    buscarGraficoUmidade,
    buscarTempoForaFaixa,
    buscarTipoTecido,
    umidadeDoLugar
}