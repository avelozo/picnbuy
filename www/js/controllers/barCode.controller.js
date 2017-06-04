'use strict';
angular.module('app.controllers.barCode', ['ionic-material','ngCordova']).controller('barCode',  function($scope, $cordovaBarcodeScanner, $state){

  document.addEventListener("deviceready", function () {

    $cordovaBarcodeScanner
      .scan()
      .then(function(barcodeData) {
        $state.go('detalheProduto');
      }, function(error) {
        // An error occurred
      });
})});
