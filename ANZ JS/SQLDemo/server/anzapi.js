var mysql      = require('mysql');
var express        =         require("express");

var bodyParser     =         require("body-parser");

var app            =         express();


var connection = mysql.createConnection({

    host     : 'localhost',

    user     : 'root',

    password : 'rps@123',

    database : 'mydb'

});



connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get ("/", function(request, response){
    response.send("Login API creation successful....!");
}

);



app.post('/login',function(req,res){



    // Website you wish to allow to connect

    res.setHeader('Access-Control-Allow-Origin', '*');



    // Request methods you wish to allow

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');



    // Request headers you wish to allow

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');



    // Set to true if you need the website to include cookies in the requests sent

    // to the API (e.g. in case you use sessions)

    res.setHeader('Access-Control-Allow-Credentials', true);



    var user_name=req.body.userName;

    var password=req.body.password;

    console.log("User name = "+user_name+", password is "+password);

    //console.log(req.body);

    res.end("done");





});



app.post('/reg',function(req,res){



    // Website you wish to allow to connect

    res.setHeader('Access-Control-Allow-Origin', '*');



    // Request methods you wish to allow

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');



    // Request headers you wish to allow

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');



    // Set to true if you need the website to include cookies in the requests sent

    // to the API (e.g. in case you use sessions)

    res.setHeader('Access-Control-Allow-Credentials', true);



    var user_ID=req.body.userID;

    var username=req.body.userName;

    var address =req.body.address;

    var Mobile_No=req.body.MobileNo;

    console.log("User ID = "+user_ID+", username is" +username+  ",address is" +address+ " ,MobileNo = " + Mobile_No );

    //console.log(req.body);

    res.end("done");


    var insertrecord = 'Insert into customer(Customer_Id, Name,Address,MobileNo) Value (?,?,?,?)';
    connection.query(insertrecord, [user_ID, username,address,Mobile_No], function (err, res) {
        if (err) throw err;
        else {
            console.log ('A new customer is added');
        }
    })



});




app.listen(7300,function(){

    console.log("Started on PORT 7300");

})