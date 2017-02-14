app.directive('welcome',function(){
  return {
    templateUrl:'src/app/templates/directive-parent-template.html',
    controller:'directiveToDirectiveCtrl',
    restrict:'E',
    scope:{},
    link:function(scope,element,attrs){
      element.bind("mouseenter",function(){
        console.log(scope.words);
      })
    }
  }
});
