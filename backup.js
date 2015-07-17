var myapp = angular.module('cacApp', ['ngRoute', 'ngAnimate']);
myapp.config(function($locationProvider, $routeProvider) {
  /*$locationProvider.hashPrefix('!');*/
  $routeProvider.when('/',{
    templateUrl:'./views/home.html'

  });
  $routeProvider.when('/countries',{
   templateUrl:'./views/country.html',
   controller :'countryCtrl'
 });
  $routeProvider.when('/countries/:country/:capital',{
    templateUrl:'./views/capitals.html',
    controller :'capitalCtrl'
  });
  
}).factory("countryData", function($http) {
  return function() {
    return $http.get('http://api.geonames.org/countryInfoJSON?username=smekala');
  };
}).factory("capitalsData", function($http,countryData) {
  return function() {
   countryData().success(function($scope,data) {
     var jsonData =data;
     /*console.log(jsonData.geonames);*/
      $scope.result = jsonData.geonames;

         for (var key in $scope.result)
        {
          if ($scope.result.hasOwnProperty(key))
          {
          // here you have access to
          var cName = $scope.result[key].countryName;
          }
        }
        var url = "http://api.geonames.org/search?";
        var request = {
            username : 'smekala',
            q :'bellary',
            name:cName
        };
      return $http.post('http://api.geonames.org/searchJSON?username=smekala&q=bellary&name=bellary&isNameRequired')
});
};
 })
.controller('countryCtrl', ['$scope', 'countryData', function($scope, countryData) {
 countryData().success(function(data) {
   var jsonData =data;
   /*console.log(jsonData.geonames);*/
   $scope.result = jsonData.geonames;
   console.log(typeof(jsonData.geonames));
 })
}]).controller('capitalCtrl',['$scope','capitalsData', '$routeParams' ,function($scope,capitalsData ,$routeParams){
 capitalsData().success(function(data){
  var jsonData = data.geonames;
  $scope.capitalData = jsonData;
  console.log( $scope.capitalData);;
})

 $scope.country = $routeParams.name;
 console.log($scope.country);
}]);


















