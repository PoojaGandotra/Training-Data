var connRef= require('./connectionHelper');

var customerModelRef = require('./dbschema').CustomerModel
var accountModelRef = require('./dbschema').AccountModel

module.exports.addData =function(obj) {

    Id = parseInt(obj.customerRef);
    console.log(Id);
    console.log("In Add Data");
    customerModelRef.findOne({customerId: Id}, function (err, res) {
        console.log(res);
        obj1 = new accountModelRef({
            accountNo: obj.accountNo,
            accountType: obj.accountType,
            balance: obj.balance,
            customerRef: res

        })
        obj1.save(function (err, success) {
            if (!err)
                console.log("Saved !!!");
            else
                console.log(err);
        });

    });

}



