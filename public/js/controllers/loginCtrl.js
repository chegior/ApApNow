angular.module('apapnow').controller('loginCtrl',function($scope,loginSrv){



  //this function should recieve USERNAME and PASSWORD and search if DB already has that
  $scope.loginAccess = function(user){
    if(user){
      console.log('User Controller',user);
      loginSrv.loginAccess(user);

    }else{
      alert("ERROR....Please Enter USERNAME OR PASSORRD");
    }


  }


})
