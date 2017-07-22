angular.module('apapnow').service('registerSrv',function($http){

  this.addCustomer = function(cust){

    return $http({
      method:'POST',
      url:'/api/newCustomer',
      data:{customer: cust} //this is req.body on the backend
    }).then(function(response){
      console.log('response on frontend', response)
    })
  }



});
