var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
    .when(
      "/",
      {
        templateUrl: "src/app/templates/main-template.html",
        controller: "AppCtrl",
        controllerAs: "appctrl",
        resolve:{
          // The app in the resolve maps to the app module. The resolve setup here simply assigns a defer object and returns its promise.
          app : function($q,$timeout){
            // The app in the resolve maps to the app module. The resolve setup here simply assigns a defer object and returns its promise.
            var defer = $q.defer();
            $timeout(function(){
              console.log('timing...');
              defer.resolve();
            },2000);
            console.log('time out...');
            // If this is run in the browser, the page will not render, as the promise was never fulfilled. This is fixed by invoking resolve().
            return defer.promise;
          }
        }
      }
    )
    .when('/cookies',
      {
        redirectTo: function (routeParams, path, search) {
          console.log(routeParams);
          console.log(path);
          console.log(search);
          return "/";
        }
      }
    )
    .when('/cookies/:cookieType',
     {
       redirectTo: function (routeParams, path, search) {
         console.log(routeParams);
         console.log(path);
         console.log(search);
         return "/" + routeParams.cookieType;
       }
     }
   )
    .when(
      "/test",
      {
        templateUrl: "src/app/templates/test-template.html",
        controller: "AppCtrl",
        controllerAs: "appctrl"
      }
    )
    .when(
      "/:message",
      {
        templateUrl: "src/app/templates/message-template.html",
        controller: "AppCtrl",
        controllerAs: "appctrl"
      }
    )
    .when("/:firstName/:middleName/:lastName",
    {
      templateUrl: "src/app/templates/fullname-template.html",
      controller: "AppCtrl",
      controllerAs: "appctrl"
    }
  );
}).controller('AppCtrl',['$scope','$log','$routeParams',function($scope,$log,$routeParams){
  $log.info('AppCtrl is on...');
  var self = this;
  self.message = $routeParams.message;
  self.fullname = $routeParams.firstName + " " + $routeParams.middleName  + " " + $routeParams.lastName;
  $scope.model = {
   message: "I'm a great app!"
 }
}]);
