app.directive('directiveParent',function(){
  return {
    templateUrl:'src/app/templates/directive-parent-template.html',
    controller:'directiveToDirectiveCtrl',
    link:function(scope,element,attrs){
      element.bind("mouseenter",function(){
        console.log(scope.words);
      })
    }
  }
});
