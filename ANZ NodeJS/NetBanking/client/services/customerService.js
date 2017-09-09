customerApp.service('CustomerServices',['$http',function($http){

    var customerList = function(){

        return $http({
            url:'http://localhost:7070/getCustomers',
            method  :'get',
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
        customerListObj:customerList,
    }

}]);