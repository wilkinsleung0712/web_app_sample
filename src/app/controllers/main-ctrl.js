app.controller('MainCtrl',['$scope','$log','$window',function($scope,$log,$window){
  $log.info("->MainCtrl");
  var self = this;
  // CHECK about creating javascript object
  //http://stackoverflow.com/questions/8224680/create-an-object-with-properties
  //
 function Message(id,content,labels){
    this.id = id;
    this.content = content;
    this.labels = labels;

    this.getId = function(){
      return this.id;
    }

    this.getContent = function(){
      return this.content;
    }

    this.getLabels = function(){
      return this.labels;
    }

    this.displayMessage = function(){
      return id + ':' + content;
    }
  };

  self.messages = [];
  self.messages.push(new Message(0,'newMessage0',null).displayMessage());
  self.messages.push(new Message(1,'newMessage1',null).displayMessage());

  self.updateMessage = function(newMessage){
    if(newMessage){
        var message = new Message(self.messages.length,newMessage,null);
        self.messages.push(message.displayMessage());
        self.tempmessage = null;
    }else{
      $window.alert('new message cannot be null or empty');
    }

  }

  self.deleteMessage = function(){
    self.messages.pop();
  }

  //testing for scope changes
  $scope.scopemessages = "scopemessages in MainCtrl's scope";
}]);
