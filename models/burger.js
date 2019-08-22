const orm = require("../config/orm.js");

const burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        });
    },
    create: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};
orm.selectAll("burgers");

orm.insertOne("burgers", "burger_name", "hawaiian burger");

orm.updateOne("burgers", "devoured", "true", "burger_name", "hawaiian burger");

module.exports = burger;