app.directive('myCustomCtrlDirective',function(){
  return {
    templateUrl:'src/app/templates/custom-entering-template.html',
    link:function(scope,element,attrs){
      element.bind("mouseenter", function(){
        scope.$apply(attrs.entering);
      })
    }
  };
});
