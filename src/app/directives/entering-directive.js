app.directive('myEntering', function(){
  return {
    templateUrl:'src/app/templates/entering-template.html',
    link:function(scope,element,attrs){
      element.bind('mouseenter',function(){
        scope.fun.start('This is calling from normal directive'); // calling the fun ctrl method
        scope.main.alterMessage(); // calling the main ctrl method
      })
    },
    controller:['$scope','$log',function($scope,$log){
      var self = this;

      self.start = function(message) {
        console.log("Fun times have been started! ->" + message);
      }

    }],
    controllerAs:'fun'
  };
});
