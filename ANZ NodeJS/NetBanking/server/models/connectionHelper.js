var mongoose = require('mongoose');
var configRef =require('./config');

mongoose.connect(configRef.url,configRef.mongodb, configRef.mongoport);

var db=mongoose.connection;
db.once('open',function(){
    console.log("connection ready");
    console.log("testing");
});

