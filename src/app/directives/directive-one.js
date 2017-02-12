app.directive('hi',function(){
  return {
    required:'directiveParent',
    templateUrl:'src/app/templates/directive-one-template.html',
    link:function(scope,element,attrs,directiveToDirectiveCtrl){
      directiveToDirectiveCtrl.sayHi();
    }
  }
});
