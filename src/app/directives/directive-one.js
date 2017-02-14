app.directive('hi',function(){
  return {
    // restrict:'E',
    require:'welcome',
    // templateUrl:'src/app/templates/directive-one-template.html',
    link:function(scope,element,attrs,directiveToDirectiveCtrl){
      directiveToDirectiveCtrl.sayHi();
    }
  }
});
