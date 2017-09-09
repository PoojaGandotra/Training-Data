
accountsApp.constant('type',['Savings','Recurring']);
accountsApp.controller('AccountsController',['$scope','type','CustomerServices','AccountServices',
    function($scope,type,CustomerServices,AccountsServices) {

   $scope.accountTypes =type;
    $scope.accountsObj ={
        accountNo :0,
        accountType:"",
        balance:0,
        customerRef:0,

    }
    CustomerServices.customerListObj().then(function (CustData) {
        //console.log(result);
        $scope.CustomerColl = CustData.data
        //console.log($scope.CustomerColl)
    });
    $scope.save = function () {
        console.log($scope.accountsObj)
        AccountsServices.acctObj($scope.accountsObj).then(function(result){

            console.log(result)
            }
        )
    }


}])
