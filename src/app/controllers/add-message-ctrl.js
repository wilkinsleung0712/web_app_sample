app.controller('AddMessageCtrl',['$scope','$log',function($scope,$log){
  $log.info('->AddMessageCtrl');
  $scope.test1 = 'AddMessageCtrl_test1';
  $log.info($scope.$parent.scopemessages);
  $log.error($scope);
}]);
