app.directive('tab',function(){
  return {
    restrict:'E',
    require:'^tabset',
    transclude:true,
    template:' <div role="tabpanel" ng-transclude ng-show="active"></div>',
    scope: { heading:'@'},
    link: function(scope, elem, attr,tabCtrl) {
      scope.active = false;
      tabCtrl.addtab(scope);
    }
  }
})
