(function () {
    'use strict';

  angular.module("app")
    .component('posts', {
      controller: Controller,
      templateUrl: "./posts/posts.template.html"
  });

  Controller.$inject = ['$http', 'postsService'];

  function Controller($http, postService){
    const vm = this;
    vm.posts = [];

    vm.$onInit = onInit;

    function onInit(){
      postService.getAllPosts()
        .then(function(posts){
          vm.posts = posts;
        });

      vm.sortBy = '-votes';
      vm.sortText = 'Votes';

    }


  }

})();//end of file
