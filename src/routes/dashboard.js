var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/umidadeIdeal",
    function(req, res){
        dashboardController.umidadeIdeal(req, res);
    }
);

module.exports = router;
