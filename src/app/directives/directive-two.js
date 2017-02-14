app.directive('hello',function(){
  return {
    // restrict:'E',
    require:'welcome',
    link:function(scope,element,attrs,welcomeCtrl){
      welcomeCtrl.sayHello();
    }
  }
});
