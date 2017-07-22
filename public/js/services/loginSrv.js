angular.module('apapnow').service('loginSrv',function($http){

  this.loginAccess = function(user){
    console.log("ServiceController - Calling the SERVER HTTP");
    return $http({
      method:'POST',
      url:'#',
      data:{user:user}

    }).then(function(response){
      console.log('response!!!')
    })
  }


});
