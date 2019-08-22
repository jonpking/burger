const burger = require("../models/burger.js");

module.exports = function (app) {

    app.get("/", function (req, res) {
        burger.all(function (data) {
            const hbsObject = {
                burgers: data
            };
            res.render("index", hbsObject);
        });
    });

    app.post("/api/burgers", function (req, res) {
        burger.create([
            "burger_name", "devoured"
        ], [
                req.body.burger_name, req.body.devoured
            ], function (result) {
                res.json({ id: result });
            });
    });

    app.put("/api/burgers/:id", function (req, res) {
        let condition = "id = " + req.params.id;
        burger.update({
            devoured: req.body.devoured
        }, condition, function (result) {
            if (result.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
}