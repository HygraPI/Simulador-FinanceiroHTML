var dashboardModel = require("../models/dashboardModel");

function umidadeIdeal(req, res) {

    dashboardModel.umidadeIdeal()
        .then(function(resultado){

            res.json(resultado);

        }).catch(function(erro){

            console.log(erro);
            res.status(500).json(erro.sqlMessage);

        });
}