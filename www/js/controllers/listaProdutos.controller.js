'use strict';

angular.module('app.controllers.listaProdutos', ['ionic-material']).controller('ListaProdutosController', 
function ($scope, WorkshopService,$state) {


 $scope.irParaDetalheProduto = function(){

     $state.go('detalheProduto');
 }
 
});