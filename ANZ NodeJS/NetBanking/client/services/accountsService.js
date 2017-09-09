accountsApp.service('AccountServices',['$http',function($http){

    var createAccount = function(obj){

        return $http({
            url:'http://localhost:7070/createAccount',
            method  :'post',
            params:obj,
            datatype:'json',
            headers:{
                'Content-Type':'application/json'
            }

        }).then (function(response){
                return response;
            }
        )

    }
    //closure to ensure a singleton object.
    return{
        acctObj:createAccount,
    }

}]);
