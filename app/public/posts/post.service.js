(function() {
  'use strict';

  angular
    .module('app')
    .service('postService', service);

  service.$inject = ['$http'];

  function service($http) {
    const vm = this;

    this.getAllPosts = function() {
      return $http.get('/api/posts').then(postResponse => {
        return postResponse.data;
        //return vm.posts;
        // return $http.get(person.commentUrl).then(commentsResponse => {
        //   person.comments = commentsResponse.data
        //   return person
        // })
      });
    };
  }

    // this.getAllPosts = function(){
    //   $http.get('/api/posts').then(function (response) {
    //     console.log(response.data);
    //     var posts = response.data;
    //     // for(let i = 0; i < vm.posts.length; i++){
    //     //   vm.getPostComments(vm.posts[i]);
    //     // }
    //     return posts;
    //   });

  //   };
  // }

})();
