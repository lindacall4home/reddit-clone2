(function () {
    'use strict';

  angular.module("app")
    .component('editPost', {
      controller: Controller,
      templateUrl: "./editPost/editPost.template.html"
  });

  Controller.$inject = ['$http' , '$stateParams', '$state'];

  function Controller($http, $stateParams, $state){
    const vm = this;

    vm.$onInit = onInit;

    function onInit(){
      vm.id = $stateParams.id;
      $http.get('/api/posts/' + vm.id).then(function (response) {
        vm.post = response.data;
      });

    }


    vm.editPost = function(){

      $http.patch('/api/posts/' + vm.id, vm.post).then(function (response) {
        delete vm.post;
        $state.go('posts');

      });


    };


  }

}());//end of file
