var express = require("express");
var router = express.Router();

var sensorController = require("../controllers/sensorController");
const { listarSensores } = require("../models/sensoreModel");

router.get("/listarSensores", function (req, res){
    sensorController.listarSensores(req, res);

})

module.exports = router;
