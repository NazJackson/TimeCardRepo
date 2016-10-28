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
    $scope.responses = [];
    $http.get("http://localhost:8080/timecard")
    .then(
      function(response){
        console.log(response.data);
        $scope.responses = response.data;
      });
  $scope.delete = function(){

     var idSpot = prompt("Please enter an ID of the timeCard you want to delete")

          var id  = [{
            'id': idSpot
          }];
          console.log(id.id);
          $http.delete("http://localhost:8080/timeCardId?id="+id[0].id);

    };


}]);
