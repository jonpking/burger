const orm = require("../config/orm.js");

const burger = {
    all: function (callback) {
        orm.selectAll("burgers", callback)
    },
    create: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(result) {
            cb(result);
        })
    },
    update: function (columnInput, valueInput, whereColumn, whereValue, cb) {
        console.log(columnInput, valueInput, whereColumn, whereValue)
        orm.updateOne("burgers", columnInput, valueInput, whereColumn, whereValue, function(result) {
            cb(result);
        })
    }
};

module.exports = burger;