const orm = require("../config/orm.js");

orm.selectAll("burgers");

orm.insertOne("burgers", "burger_name", "hawaiian burger");

orm.updateOne("burgers", "devoured", "true", "burger_name", "hawaiian burger");

module.exports = burger;