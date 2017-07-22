angular.module('apapnow').controller('registerCtrl',function($scope,registerSrv){
  //cut is an object

  $scope.registerCust = function(cust){
    if(cust){
      $scope.cust = cust;
      console.log('here',$scope.cust);
       registerSrv.addCustomer(cust)
       .then(function (response) { //waits for having a response
         console.log('in contrl', response)
         $scope.clearFields()
       })



    }else {
      alert("Please enter Information")
    }
  }

  $scope.clearFields = function(){
    console.log("Clear it's been called");
    $scope.cust.firstName = '';
    $scope.cust.lastName = '';
    $scope.cust.email = '';
    $scope.cust.phone = '';
    $scope.cust.user = '';
    $scope.cust.pass = '';
  }

});
