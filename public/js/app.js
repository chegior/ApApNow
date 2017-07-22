angular.module('apapnow',['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl:'../views/home.html'
    })
    .state('book',{
      url:'/book',
      templateUrl:'./views/book.html',
      controller: 'bookedCtrl'
    })
    .state('contact',{
      url:'/contact',
      templateUrl:'./views/contact.html'
    })
    .state('login',{
      url:'/login',
      templateUrl:'./views/login.html',
      controller:'loginCtrl'
    })
    .state('register',{
      url:'/register',
      templateUrl:'./views/register.html',
      controller:'registerCtrl'
    })
    ;

    $urlRouterProvider
      .otherwise('/');
})
