// app.directive('googleMap', ['$rootScope', 'mainService', 
//     function( $rootScope, mainService ) {  

//         // return {
//         //     restrict: 'C', // restrict by class name
//         //     scope: {
//         //         mapId: '@id', // map ID
//         //         lat: '@',     // latitude
//         //         long: '@'     // longitude
//         //     },
//         //     link: function( $scope, elem, attrs ) {

//         //         // Check if latitude and longitude are specified
//         //         if ( angular.isDefined($scope.lat) && angular.isDefined($scope.long) ) {

//         //             // Initialize the map
//         //             $scope.initialize = function() {                                        
//         //                 $scope.location = new google.maps.LatLng($scope.lat, $scope.long);

//         //                 $scope.mapOptions = {
//         //                     zoom: 12,
//         //                     center: $scope.location
//         //                 };

//         //                 $scope.map = new google.maps.Map(document.getElementById($scope.mapId), $scope.mapOptions);

//         //                 new google.maps.Marker({
//         //                     position: $scope.location,
//         //                     map: $scope.map,
//         //                 });
//         //             }

//         //             // Loads google map script
//         //             mainService.then(function () {
//         //                 // Promised resolved
//         //                 $scope.initialize();
//         //             }, function () {
//         //                 // Promise rejected
//         //             });
//         //         }
//         //     }
//         // };
//     }]);