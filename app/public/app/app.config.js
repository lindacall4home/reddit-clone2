(function() {
  'use strict';

  angular.module('app').config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
    .state({ name: 'posts', url: '/', component: 'posts' })
    .state({name: 'posts.post', url: '/:id', component: 'post'})
    .state({ name: 'editPost', url: '/posts/:id/edit', component: 'editPost' });

  }

}());
