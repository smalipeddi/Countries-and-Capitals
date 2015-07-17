(function () {
angular.module('cacApp', ['ngRoute', 'ngAnimate'])
.config(function($locationProvider, $routeProvider) {

 $routeProvider.when('/countries',{
       templateUrl:'./views/countries.html',
       controller :'CountryCtrl'
    });
})
.controller('CountryCtrl', CountryCtrl);

function CountryCtrl($scope,countryData){

    console.log(getCountries);
    $scope.countryList = getCountries;
};
})(); 

