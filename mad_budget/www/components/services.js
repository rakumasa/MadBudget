angular.module('starter.services', [])

// .factory('spendingFactory', function($http) {
//   // Might use a resource here that returns a JSON array
.factory('spendingService', function($http) {

  //Garabage
  // var expenseList = [];
  // if(expenseList.length === 0) {
  //   expenseList = $http.get('http://localhost:8000/spendings')
  // }

  return {
    //get all list
    all: function() {
      return $http.get('http://localhost:8000/spendings');
    },
    //get one list
    one: function(id) {
      return $http.get('http://localhost:8000/spendings/' + id);
    },
    //add one new list
    add: function(post) {
      return $http.post('http://localhost:8000/spendings', post);
    },
    update: function(id, editpost) {
      return $http.put('http://localhost:8000/spendings/' + id, editpost);
    },
    remove: function(id) {
      return $http.delete('http://localhost:8000/spendings/' + id);
    },
    getsum: function() {
      // return $http.get('http://localhost:8000/spendings/sum');
    },
    thelist: function() {
      return expenseList;
    }
  };

  // Some fake testing data
  // var spendings = [{
  //   id: 0,
  //   date: 'Ben Sparrow',
  //   description: 'You on your way?',
  //   amount: 'img/ben.png',
  //   category: 'grocery'
  // }, {
  //   id: 1,
  //   date: 'Ben Sparrow',
  //   description: 'You on your way?',
  //   amount: 'img/ben.png',
  //   category: 'grocery'
  // }, {
  //   id: 2,
  //   date: 'Ben Sparrow',
  //   description: 'You on your way?',
  //   amount: 'img/ben.png',
  //   category: 'grocery'
  // }, {
  //   id: 3,
  //   date: 'Ben Sparrow',
  //   description: 'You on your way?',
  //   amount: 'img/ben.png',
  //   category: 'grocery'
  // }, {
  //   id: 4,
  //   date: 'Ben Sparrow',
  //   description: 'You on your way?',
  //   amount: 'img/ben.png',
  //   category: 'grocery'
  // }];
  // var chats = [{
  //   id: 0,
  //   name: 'Ben Sparrow',
  //   lastText: 'You on your way?',
  //   face: 'img/ben.png'
  // }, {
  //   id: 1,
  //   name: 'Max Lynx',
  //   lastText: 'Hey, it\'s me',
  //   face: 'img/max.png'
  // }, {
  //   id: 2,
  //   name: 'Adam Bradleyson',
  //   lastText: 'I should buy a boat',
  //   face: 'img/adam.jpg'
  // }, {
  //   id: 3,
  //   name: 'Perry Governor',
  //   lastText: 'Look at my mukluks!',
  //   face: 'img/perry.png'
  // }, {
  //   id: 4,
  //   name: 'Mike Harrington',
  //   lastText: 'This is wicked good ice cream.',
  //   face: 'img/mike.png'
  // }
// ];

});
