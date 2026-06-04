var sensorModel = require("../models/sensoreModel");

function listarSensores(req, res){
    sensorModel.listarSensores().then((resultado) => {
        res.json(resultado);
    });
}

module.exports = {
    listarSensores
}