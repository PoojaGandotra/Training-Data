var customerModelRef = require('./dbschema').CustomerModel
var connRef= require('./connectionHelper');

function returnResult(err,result){
    return result;
}
module.exports.getCustomerList =function(){

    dataResponse =customerModelRef.find().exec(returnResult());

       return dataResponse;
};

/*response =module.exports.getCustomerList();
response.then(function(res){
    console.log("Response:",res);
});*/

