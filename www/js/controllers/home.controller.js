'use strict';

angular.module('app.controllers.home', ['ionic-material']).controller('HomeController', function ($scope, WorkshopService,$state) {

 $scope.workshops = [];
  
 WorkshopService.getWorkshops().then(function (responseWorkshops) {
     $scope.workshops = responseWorkshops.data.data;
 });


 $scope.irParaDetalheProduto = function(){

     $state.go('detalheProduto');
 }

});