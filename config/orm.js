const connection = require("./connection.js");

const orm = {
    selectAll: function (tableInput, callback) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, tableInput, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    insertOne: function (tableInput, columnInput, valueInput) {
        // let columns = colAndValArray.keys().join(", ");
        // let values = colAndValArray.values().join(", ");
        const queryString = "INSERT INTO ?? (??) values (?)";
        console.log(queryString);
        connection.query(queryString, [tableInput, columnInput, valueInput], function (err, result) {
            if (err) throw err;
        });
    },

    updateOne: function (tableInput, columnInput, valueInput, whereColumn, whereValue) {
        // let columns = colAndValArray.keys().join(", ");
        // let values = colAndValArray.values().join(", ");
        // let whereColumns = whereSelector.keys().join(", ");
        // let whereValues = whereSelector.values().join(", ");
        const queryString = "UPDATE ?? SET ?? = ? WHERE ? = ?";
        console.log(queryString);
        connection.query(queryString, [tableInput, columnInput, valueInput, whereColumn, whereValue], function (err, result) {
            if (err) throw err;
        });
    }
}

module.exports = orm;