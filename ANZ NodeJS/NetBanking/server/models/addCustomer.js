
var customerModelRef = require('./dbschema').CustomerModel
var connRef= require('./connectionHelper');

var obj= new customerModelRef(
    {
        customerId :43567,
        name:'Peter Pan',
        email:'Peter.Pan@gmail.com',
        phoneNo:'919972239929'
    }
)

obj.save(customerSaved)


function customerSaved(err, result) {
    if (err) {
        return console.error(err);
    } else {
        console.log("Saved Successfully");
        // go ahead
    }
}