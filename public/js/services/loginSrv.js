angular.module('apapnow').service('loginSrv',function($http){

  this.loginAccess = function(user){
    var loginSrv = this;
    console.log("ServiceController - Calling the SERVER HTTP");
    return $http({
      method:'POST',
      url:'/api/userAccess',
      data:{user:user}

    }).then(function(response){
      console.log("this is the RESPONSE :",response);
      console.log('this is tis', loginSrv)
      loginSrv.user = response.data[0]
      return response.data[0];
    })
  }


});
