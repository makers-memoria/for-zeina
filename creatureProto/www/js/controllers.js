angular.module('starter.controllers', ['ngDraggable', 'firebase', 'ngCordova'])

.controller('PetCtrl', function($scope, Images, $cordovaLocalNotification) {
  $scope.myVar = false;
  // $scope.creatures = Images.pet();
  $scope.food = Images.foodList();
  $scope.randomFood = [$scope.food[Math.floor(Math.random() * $scope.food.length)]]

  // $scope.onDragComplete = function(data,evt){
  //   console.log("drag success, data:", data);
  // }
  $scope.onDropComplete = function(){
    console.log("Omnomnomnom!");
    $scope.myVar = true;
    setTimeout(function ()
    {
      $scope.$apply(function()
      {
        $scope.myVar = false;
      });
    }, 1000);
  };

  $scope.add = function() {
    var now = new Date().getTime();
    var timeInSeconds = 5
    _X_sec_from_now = new Date(now + timeInSeconds *1000);
    $cordovaLocalNotification.schedule({
      id: 1,
      title: "<3!",
      text: "Thanks for feeding me!",
      at: _X_sec_from_now,
    });
    console.log('working')
  };

})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = [
    {
    name: "Push",
    checked: true
    },
    {
    name: "Time",
    checked: true
    },
    {
    name: "Facebook"
    },
    {
    name: "Sleep",
    checked: true
    }
  ];
})



.controller('QuestionsCtrl', function($scope, QuestionFactory) {

  $scope.items = QuestionFactory;

    $scope.addQuestion = function(){
      $scope.items.$add({
      question: $scope.items.question,
      answer: $scope.items.answer,
      date: Date.now(),
      interval: 5 * 1000
    });


  };
});
