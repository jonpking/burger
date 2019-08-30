const burger = require("../models/burger.js");

module.exports = function (app) {

    app.get("/", function (req, res) {
        burger.all(function (result) {
            console.log("Results:", result);
            res.render("index", {
                burgers: result
            });
        });
    });

    app.post("/api/burgers", function (req, res) {
        burger.create("burger_name", req.body.burger_name, function (result) {
            res.json({ id: result });
        });
    });

    app.put("/api/burgers/:id", function (req, res) {
        console.log(req.params.id)
        burger.update("devoured", true, "id", req.params.id);
        res.end();
    });
}