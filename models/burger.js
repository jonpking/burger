const orm = require("../config/orm.js");

const burger = {
    all: function (callback) {
        orm.selectAll("burgers", callback)
    },
    create: function (cols, vals) {
        orm.insertOne("burgers", cols, vals)
    },
    update: function (columnInput, valueInput, whereColumn, whereValue) {
        orm.updateOne("burgers", columnInput, valueInput, whereColumn, whereValue)
    }
};

module.exports = burger;