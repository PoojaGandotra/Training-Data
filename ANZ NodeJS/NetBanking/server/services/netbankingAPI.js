var express =require("express");
var config= require('./config');
var getCustomerListRef =require('../models/getCustomerList');
var addaccountRef  =require('../models/addAccount');
var app =express();
var bodyParser =require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/", function(request, response){
    response.send("Express is ready");
})
app.set('port', config.apiport);
app.listen(app.get('port'),function(){
    console.log("server started at port number",app.get('port'))
})

app.get("/getCustomers", function(request, response)
{
      response.setHeader('Access-Control-Allow-Origin','*');
      response.setHeader('Access-Control-Allow-Methods','GET','POST');
      response.setHeader('Access-Control-Allow-Headers','X-Requested-With,Content-Type');
      response.setHeader('Access-Control-Allow-Credentials',true);
      getCustomerListRef.getCustomerList().then(function(res){
        response.send(res);
    })

    app.post("/createAccount", function(request, response)
    {
        console.log("IN post");
        response.setHeader('Access-Control-Allow-Origin','*');
        response.setHeader('Access-Control-Allow-Methods','GET','POST');
        response.setHeader('Access-Control-Allow-Headers','X-Requested-With,Content-Type');
        response.setHeader('Access-Control-Allow-Credentials',true);
        console.log(request.query);
        addaccountRef.addData(request.query);
        response.send("Data Recieved");


        })

});