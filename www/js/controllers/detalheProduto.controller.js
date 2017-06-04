'use strict';

angular.module('app.controllers.detalheProduto', ['ionic-material']).controller('DetalheProdutoController', function ($scope,$state, WorkshopService) {

$scope.showAlert = false;

$scope.exibirConfirmacaoCompra = function(){
    $state.go('confirmacaoProduto');
}

 
});