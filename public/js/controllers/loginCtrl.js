angular.module('apapnow').controller('loginCtrl',function($scope,loginSrv){



  //this function should recieve USERNAME and PASSWORD and search if DB already has that
  $scope.loginAccess = function(user){
    if(user){
      console.log('User Controller',user);
      loginSrv.loginAccess(user).then(function(response) {
        console.log('response on controller', response)
        $scope.customer = response;
      })
      console.log("REVIEW ", $scope.customer)
    }else{
      alert("ERROR....Please Enter USERNAME OR PASSORRD");
    }


  }


})
