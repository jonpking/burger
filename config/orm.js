const connection = require("./connection.js");

const orm = {
    selectAll: function (tableInput) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, tableInput, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (tableInput, columnInput, valueInput) {
        // let columns = colAndValArray.keys().join(", ");
        // let values = colAndValArray.values().join(", ");
        const queryString = "INSERT INTO ?? (??) values (?)";
        console.log(queryString);
        connection.query(queryString, [tableInput, columnInput, valueInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    updateOne: function (tableInput, columnInput, valueInput, whereColumn, whereValue) {
        // let columns = colAndValArray.keys().join(", ");
        // let values = colAndValArray.values().join(", ");
        // let whereColumns = whereSelector.keys().join(", ");
        // let whereValues = whereSelector.values().join(", ");
        const queryString = "UPDATE ?? SET ?? = ? WHERE ? = ?";
        console.log(queryString);
        connection.query(queryString, [tableInput, columns, values, whereColumn, whereValue], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
}

module.exports = orm;