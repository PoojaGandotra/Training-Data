/**

 * Created by BALASUBRAMANIAM on 29/08/2017.

 */
module.exports.view = function () {


var mongoose = require('mongoose');
var config=require('./config');

mongoose.connect(config.url,config.mongodb,config.mongoport);



var db = mongoose.connection;



db.once('open',function()

{

    console.log("connected.....");

});



var schema =new mongoose.Schema(

    {

        id:Number,

        name:String,

        startDate:Date,

        balance:Number,

        type:String



    });



CustomerModel = mongoose.model('customer',schema);

var customerData = new CustomerModel ({

    id:435679,

    name:"Anoop",

    startDate:new Date(),

    balance:435345,

    type:"savings"

});



customerData.save(function(err, customerData) {

    if (err) return console.error(err);

    console.log("saving......");

});

data = CustomerModel.find({},function(err,res)

{

    console.log("reaching...");

    console.log(err);

    console.log(res);
    return res;

})
console.log(data);
return data;
}
/*
results = module.exports.view();
*/