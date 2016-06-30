(function() {
    
var app = angular.module('myNYT', ['ionic', 'angularMoment']);
    
app.controller('NYTCtrl', function($http, $scope, $ionicPopup){

    $scope.stories = [];
    $scope.query = {
      search: ""
    };
   

   $scope.lookyLoo = function() {

    $scope.stories.length = 0;

    var api = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=a7e2da233d3e4666a0318d2f521106d3&sort=newest&page=0&q='+ $scope.query.search;
    console.log(api);
    $http.get(api).success(function(data){
      angular.forEach(data.response.docs, function(doc){
       $scope.stories.push(doc);
      });
    });

   };

   $scope.openLink = function(url) {
    window.open(url,'_blank');
   };

    $scope.getLove = function() {
     $ionicPopup.alert({
      title: 'Hello Poopy',
      template: 'I love you!'
     });
   };
   
    
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
     
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.cordova && window.cordova.InAppBrowser){
      window.open = window.cordova.InAppBrowser.open;
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
    
}());
