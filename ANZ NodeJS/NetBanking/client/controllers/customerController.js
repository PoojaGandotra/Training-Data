customerApp.controller('customerController',['$scope','UserServices','CustomerServices',function($scope,UserServices,CustomerServices) {
    $scope.checked =false;
    $scope.customerObj = {
        customerId: 2465,
        name: "Jane",
        address: "California"
    }
    $scope.changeStatus =function() {
        if ($scope.checked) {
            UserServices.userListObj().then(function (result) {
                //console.log(result);
                $scope.userColl = result.data
                console.log($scope.userColl)
            });

            CustomerServices.customerListObj().then(function (CustData) {
                //console.log(result);
                $scope.CustomerColl = CustData.data
                console.log($scope.CustomerColl)
            });
        }
    }
    $scope.save = function () {
        console.log($scope.customerObj)
    }

}
])