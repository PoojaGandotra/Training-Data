console.log("testing..");

var mongoClient = require('mongoose');

mongoClient.connect("mongodb://localhost:27017/" ,function(err,db)
{
    if(! err)
    {
        console.log("we are connected");
    }
})