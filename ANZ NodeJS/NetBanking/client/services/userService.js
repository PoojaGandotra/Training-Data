userApp.service('UserServices',['$http',function($http){

    var userList = function(){

        return $http({
            url:'https://jsonplaceholder.typicode.com/users',
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
         userListObj:userList,
    }

}]);