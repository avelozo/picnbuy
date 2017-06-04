'use strict';

angular.module('app.controllers.detalheProduto', ['ionic-material']).controller('DetalheProdutoController', function ($scope, WorkshopService) {

$scope.showAlert = false;

$scope.exibirConfirmacaoCompra = function(){
    $scope.showAlert = true;
}

 
});