
class Person
{
    constructor(name,address){

        this.Name = name;
        this.Address = address;
    }
}

class President extends Person
{
    constructor(name,address,type,resp)
    {
        super(name,address);
        this.Type = type;
        this.Responsibility= resp;

    }
}

var Object = new President ('Arpita','Bangalore', 'Female', 'Delivery Lead')
console.log(Object)


function isbig(value)
{
    return value >= 10;
}

var filtered = [12,3,5,7].filter(isbig)
console.log(filtered)



function restParam(...data)
{
    console.log((data.join(',')));
}

restParam(('TN',"KL", 'KN'))
restParam(new Array('TN','KL'));
console.log(restParam)


custmap = new Map(
    [
        ["Id",43586],
        ["Name", "Param"]
    ]
)

custmap.set("address","Chennai")
console.log(custmap)

for (var key of custmap.keys())

{
    console.log(key);
}

for (var value of custmap.values()){
    console.log(value);
}

for (var [key,value] of custmap.entries())
{
    console.log(key + "=" + value);
}


var fs = require("fs");
fs.readdir(".", function(err,files)
{
    if(err){
        return console.error(err);
    }

    files.forEach(function(file)
    {
        console.log(file);
    });

});