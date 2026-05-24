var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("public/BobIA/index");
});

module.exports = router;