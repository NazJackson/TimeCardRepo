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

     var emailAddress = prompt("Please enter an email of the timeCard you want to delete")

          var email  = [{
            'email': emailAddress
          }];
          console.log(email.email);
          $http.delete("http://localhost:8080/timeCardEmail?email="+email[0].email);

    };


}]);
