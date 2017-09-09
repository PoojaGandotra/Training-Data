
/**

 * Created by BALASUBRAMANIAM on 27/08/2017.

 */

var mysql      = require('mysql');

var connection = mysql.createConnection({

    host     : 'localhost',

    user     : 'root',

    password : 'rps@123',

    database : 'mydb'

});



connection.connect();



connection.query('SELECT * from customer', function(err, rows, fields) {

    if (!err)

        console.log('The solution is: ', rows);

    else

        console.log('Error while performing Query.');

});

var insertrecord = 'Insert into customer(Customer_Id, Name,Address,MobileNo) Value (?,?,?,?)';
connection.query(insertrecord, [23486,'Joe','','5757575757'], function (err, res) {
    if (err) throw err;
    else {
        console.log ('A new customer is added');
    }
})

connection.end();