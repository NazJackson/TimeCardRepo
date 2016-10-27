'use strict';

/**
 * @ngdoc function
 * @name hrClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hrClientApp
 */
angular.module('hrClientApp')
  .controller('AboutCtrl', ['$scope', '$http',
  function ($scope, $http){
    $scope.response = [];
    $http.get("http://localhost:8080/timecard")
    .then(
      function(response){
        console.log(response.data);
        $scope.responses = response.data;
      });
  }]);
