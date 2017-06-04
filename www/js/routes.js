'use strict';

angular.module('app.routes', []).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  })

  .state('detalheProduto', {
    url: '/detalheProduto',
    templateUrl: 'views/detalheProduto.html',
    controller: 'DetalheProdutoController'
  })

    .state('listaProdutos', {
    url: '/listaProdutos',
    templateUrl: 'views/listaProdutos.html',
    controller: 'ListaProdutosController'
  })

  .state('barCode', {
      url: '/barCode',
      controller: 'barCode'
    })
  ;

  $urlRouterProvider.otherwise('/home');

});
