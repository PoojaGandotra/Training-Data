/**
 * Created by BALASUBRAMANIAM on 24-12-2015.
 */
app = angular.module('MyApp',[]);

app.controller('UserController',['$scope','$http',function($scope,$http)
{
    $scope.book_id="";
    $scope.name = "";
    $scope.book_price = 0;
    $scope.category="";
    $scope.direction="";

    $scope.bookFilter = function (book) {
        return (book.id.startsWith($scope.book_id));
    }
    $scope.priceFilter = function (book) {

        return(book.saleInfo.retailPrice!=undefined)&&
            (book.saleInfo.retailPrice.amount>$scope.book_price)

       //    response=book.saleInfo.retailPrice.amount;
       // console.log($scope.book_price);

        // return (response >$scope.book_price);
    }

    $scope.catfilter=function(data)
    {

           // console.log(data.volumeInfo.categories[0]);
          // console.log($scope.category.volumeInfo.categories[0]);    // console.log($scope.status);
          if(data.volumeInfo.categories!=undefined) {
              console.log(data.volumeInfo.categories[0]);
           if($scope.category!="") {
               console.log($scope.category);
               return (data.volumeInfo.categories[0]==$scope.category.volumeInfo.categories[0]);
           }
          }
        //return()
    };

    $http({
        method: 'GET',
        dataType: "json",

        headers: {
            'Content-Type': 'application/json'

        },
        accepts: {
            text: "application/json"
        },
        url: 'https://www.googleapis.com/books/v1/volumes?q=C#'
    }).success(function (data) {
        $scope.status=data.items
        $.each(data.items,function(pos,value)
        {
               //console.log(value);
        });
    });


}]);