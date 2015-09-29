var app = angular.module('InstaMap', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider){
	$routeProvider
	.when('/main', {
		templateUrl: 'app/views/main.html',
		controller: 'mainCtrl'
	})

	// .otherwise({
	// 	redirectTo: '/main'
	// });
});

app.directive("myMaps", function() {
	return{
		restrict:'E',
		template:'<div></div>',
		replace:true,
		link:function($scope, element, attrs){
			var startLatLng = new google.maps.LatLng(41.161401, -112.075713);
			var mapOptions = {
				center: startLatLng,
				zoom: 16,
				mapTypeId: google.maps.MapTypeId.HYBRID
			};
			var map = new google.maps.Map(document.getElementById(attrs.id), mapOptions);
			var marker = new google.maps.Marker({
				position: mapOptions.center,
				map: map,
				title: "Starting Point"
			});
			marker.setMap(map);

		    $scope.$watch(startLatLng, function(newValue, oldValue){
		    	if (newValue === oldValue) {
		          return;
		        } else {
					var newLatLng = map.getCenter();
					console.log(newLatLng);
		        }
		    });
    	}
	};
});
