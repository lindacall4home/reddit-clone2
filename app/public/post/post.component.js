(function () {
    'use strict';

  angular.module("app")
    .component('post', {
      bindings: {
        post: '='
      },
      controller: Controller,
      templateUrl: "./post/post.template.html"
  });


  function Controller(){
    const vm = this;

    vm.$onInit = onInit;

    function onInit(){
    }

    // vm.getPostComments = function(post){
    //   $http.get('/api/posts/' + post.id + '/comments/').then(function (response) {
    //     post.comments = response.data;
    //   });
    // };

  //   vm.createPost = function(){
  //
  //     $http.post('/api/posts', vm.post).then(function (response) {
  //       var newPost = response.data;
  //       newPost.comments = [];
  //       newPost.vote_count = 0;
  //       newPost.createdAt = Date.now();
  //
  //       vm.posts.push(newPost);
  //     });
  //
  //     vm.show = false;
  //     delete vm.post;
  //   };
  //
  //   vm.toggleComments = function (post) {
  //     if(vm.lastPost !== post){
  //       vm.lastPost.showComments = false;
  //     }
  //
  //     if(post.showComments === true){
  //       post.showComments = false;
  //     }
  //     else{
  //       post.showComments = true;
  //     }
  //
  //    vm.lastPost = post;
  //   };
  //
  //   vm.addPostComment = function(post, comment){
  //     $http.post('/api/posts/' + post.id + '/comments/', comment).then(function (response) {
  //       post.comments.push(response.data);
  //     });
  //
  //     delete post.comment;
  //   };
  //
  //
  //   vm.vote = function(post, up){
  //
  //     if(up){
  //       post.vote_count++;
  //     }
  //     else{
  //       if(--post.vote_count < 0){
  //         post.vote_count = 0;
  //       }
  //     }
  //   };
  //
   }

})();//end of file
