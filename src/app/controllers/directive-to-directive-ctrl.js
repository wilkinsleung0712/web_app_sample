app.controller('directiveToDirectiveCtrl',['$scope','$log','$window',
function($scope,$log,$window){
    $log.info('directiveToDirectiveCtrl is on...');
    var self = this;
    $scope.words = [];

    self.sayHi = function(){
      $scope.words.push('hi');
    }

    self.sayHello = function(){
      $scope.words.push('hello');
    }

    self.sayHowdy = function(){
      $scope.words.push('howdy');
    }
}]);
