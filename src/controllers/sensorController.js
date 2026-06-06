var sensorModel = require("../models/sensoreModel");

function listarSensores(req, res){
    let idEmpresa = req.body.idEmpresaServer;
    sensorModel.listarSensores(idEmpresa).then((resultado) => {
        res.json(resultado);
    });
}

module.exports = {
    listarSensores
}