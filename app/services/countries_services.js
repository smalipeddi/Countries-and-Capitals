angular.module('cacApp', [])
.factory('countryData' ,function(){
	console.log("in service");
	return {

		getCountries : getCountries
	}

	function getCountries($http){

		$http({
			url: 'http://api.geonames.org/countryInfoJSON?username=demo',
			method: 'GET'
		})
		.success(function($scope,data, status, headers, config) {
			$scope.response = data;
            console.log(data);
            $scope.details =  JSON.parse(data);
            console.log('Success!');
       })
		.error(function(data, status, headers, config) {
			console.log('Failure');
		});
	};
});













	