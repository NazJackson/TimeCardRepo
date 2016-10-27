'use strict';

/**
 * @ngdoc function
 * @name hrClientApp.controller:TimeCtrl
 * @description
 * # TimeCtrl
 * Controller of the hrClientApp
 */
angular.module('hrClientApp')
  .controller('TimeCtrl', function ($http, $scope) {
      $scope.submit = function(){
        var email = document.getElementById('email');

        var startTime = document.getElementById('startTime');

        var endTime = document.getElementById('endTime');


        var timeCard = {
            "email": email.value,
            "startTime": startTime.value,
            "endTime": endTime.value

        };

      $http({
        method:'POST',
        url: 'http://localhost:8080/timeCardAdd',
        data: timeCard
      })
      .then(
        function(response){
          console.log(response.data);
        }

      );
      }


  });
