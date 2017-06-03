'use strict';

angular.module('app.controllers.home', ['ionic-material']).controller('HomeController', function ($scope, WorkshopService) {

 $scope.workshops = [];
  
 WorkshopService.getWorkshops().then(function (responseWorkshops) {
     $scope.workshops = responseWorkshops.data.data;
 });
});