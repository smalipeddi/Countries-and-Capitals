angular.module('cacApp', ['cacAppViews','ngRoute', 'ngAnimate'])
  .config(function($locationProvider, $routeProvider) {
  	/*$locationProvider.hashPrefix('!');*/
    $routeProvider.when('/',{
      templateUrl:'./home/home.html',
       controller :'HomeCtrl'
    }).when('/countries',{
       templateUrl:'./countries/countries.html',
       controller :'CountriesCtrl'
    }).otherwise({
      redirectTo : '/'
    });
  }).controller('CountriesCtrl',function($http) {
  
  $http({
    url: 'http://api.geonames.org/countryInfoJSON?username=demo',
    method: 'GET',
   
  })
  .success(function($scope,data, status, headers, config) {
    $scope.response = data;
    /* if ( angular.isArray(data) ) {
       $scope.response = data.geonames;
    }
    else {
         $scope.response = [data.geonames];
    }*/
  	console.log(data);
  	var carsFromServer = JSON.parse(data);
  	$scope.cars = carsFromServer.geonames;
    console.log('Success!');
  })
  .error(function(data, status, headers, config) {
    console.log('Failure :(');
  });
}).controller('HomeCtrl',function($scope){
	$scope.name ="anitha";
})


