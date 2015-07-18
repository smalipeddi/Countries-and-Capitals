  var myapp = angular.module('cacApp', ['ngRoute', 'ngAnimate']);
  myapp.config(function($locationProvider, $routeProvider) {
    /*$locationProvider.hashPrefix('!');*/
    $routeProvider.when('/', {
      templateUrl: './views/home.html'

    });
    $routeProvider.when('/countries', {
      templateUrl: './views/country.html',
      controller: 'countryCtrl'
    });
    $routeProvider.when('/countries/:country/:capital', {
      templateUrl: './views/capitals.html',
      controller: 'capitalCtrl'
    });

  }).factory("countryData", function($http) {
    return function() {
      return $http.get('http://api.geonames.org/countryInfoJSON?username=smekala');
    };
  })
  .controller('countryCtrl', ['$scope', 'countryData', function($scope, countryData) {
    countryData().success(function(data) {
      var jsonData = data;
       $scope.result = jsonData.geonames;
      })
  }]).controller('capitalCtrl', ['$scope','$http','$routeParams', 'countryData', function($scope,$http, countryData,$routeParams) 
  {
    $http.get('http://api.geonames.org/countryInfoJSON?username=smekala').success(function(data){
      var jsonData = data;
      console.log("ssunitha");
      $scope.result = jsonData.geonames;

      /* console.log(typeof(jsonData.geonames));*/
      for (var key in $scope.result)
      {
        if ($scope.result.hasOwnProperty(key))
        {
          // here you have access to
          var cName = $scope.result[key].countryCode;
          var cName =  encodeURIComponent(cName);
          /*  console.log(cName);*/
          var capital = $scope.result[key].capital;
          var capital = encodeURIComponent(capital);
          var population = $scope.result[key].population;
          var population = encodeURIComponent(population);
          var area = $scope.result[key].areaInSqKm;
          var area = encodeURIComponent.areaInSqKm;
          /* console.log(capital);*/
        }

        var username = "smekala";
        $http.post('http://api.geonames.org/searchJSON?username='+username+'&name='+capital+'&country='+cName)
        .success(function(data, status, headers, config) {
          console.log('Success!');
          console.log(data);
          $scope.capitalData = data.geonames;
        })
        .error(function(data, status, headers, config) {
          console.log('Failure :(');
        });



        

      }



    })

}
]);

