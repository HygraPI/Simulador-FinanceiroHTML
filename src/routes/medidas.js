var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/sensor/:idSensor", function(req, res) {
    medidaController.buscarSensor(req, res);
});

router.get("/ultima-leitura/:idSensor", function(req, res) {
    medidaController.buscarUltimaLeitura(req, res);
});

router.get("/ultimo-alerta/:idSensor", function(req, res) {
    medidaController.buscarUltimoAlerta(req, res);
});

router.get("/tipo-tecido/:idSensor", function(req, res) {
    medidaController.buscarTipoTecido(req, res);
});

router.get("/umidade-ideal/:idSensor", function(req, res) {
    medidaController.umidadeDoLugar(req, res);
});

router.get("/grafico-umidade/:idSensor", function(req, res) {
    medidaController.buscarGraficoUmidade(req, res);
});

router.get("/tempo-fora-faixa/:idSensor", function(req, res) {
    medidaController.buscarTempoForaFaixa(req, res);
});

module.exports = router;