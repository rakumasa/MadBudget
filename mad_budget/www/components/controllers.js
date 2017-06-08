angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,spendingService) {

  // spendingService.getsum().then(function(response){
  //     console.log(response.data)
  // })


})

.controller('InputCtrl', function($scope,$state,spendingService, $rootScope) {

  //Grab all data
  // spendingService.all().then(function(response){
  //   $scope.spendings = response.data
  // })

  //post new item
  $scope.addPost = function(post){

    spendingService.add(post).then(function(response){
      //push new post to all data
      $rootScope.something.push(response.data[response.data.length-1])
      //Clear form
      post.date = null;
      post.item = null;
      post.amount = null;
      post.category = null;
      //Move to list state
      $state.go('tab.list')
    })
  }

})

.controller('ListCtrl', function($scope,spendingService,$rootScope) {

  //get all list from database
  spendingService.all().then(function(response){
    $scope.spendings = response.data
    //create an array 'something' in $rootScope and send new post to it
    $rootScope.something = response.data;
  })

  $scope.getTotal = function(){
    var total = 0;
    for(var i = 0; i < $scope.something.length; i++){
      total = total + $scope.something[i].amount;
    }
    return total;
  }

  // console.log($rootScope);
  console.log("selection",$scope.selected);

  $scope.selected = [];

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  // $scope.$on('$ionicView.enter', function(e) {
  // });
  //
  // $scope.spendings = spendings.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // };
})


.controller('EditCtrl', function($scope,$state,$stateParams,spendingService,$rootScope) {

  //grab id from url
  var dataId = $stateParams.id;
  //get one data from id
  spendingService.one(dataId).then(function(response){
    $scope.spendingOne = response.data
  })

  //update the input
  $scope.editPost = function() {

    //grab id from sending list
    var dataId = $stateParams.id
    //object of all changed data
    var editPost = $scope.spendingOne
     //update the information
    spendingService.update(dataId,editPost).then(function(response){
      var findIndex = getIndex($rootScope.something)

      function getIndex(arr) {
        for(var i=0; i<arr.length;i++){
          if(arr[i].id == dataId){
            return i;
          }
        }
      }
      // console.log(findIndex)

      $rootScope.something[findIndex] = response.data[response.data.length-1]
      $state.go('tab.list')
    })
  }

  $scope.deletePost = function() {

    var dataId = $stateParams.id;

    spendingService.remove(dataId).then(function(response){

      var findIndex = getIndex($rootScope.something)

      function getIndex(arr) {
        for(var i=0; i<arr.length;i++){
          if(arr[i].id == dataId){
            return i;
          }
        }
      }
      //splice the array I want to delete
      $rootScope.something.splice(findIndex,1)
      $state.go('tab.list')
    })
  }

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
