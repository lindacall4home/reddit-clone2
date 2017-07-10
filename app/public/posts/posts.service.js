(function() {
  'use strict';

  angular
    .module('app')
    .service('postsService', service);

  service.$inject = ['$http'];

  function service($http) {
    const vm = this;

    this.getAllPosts = function() {
      return $http.get('/api/posts').then(postsResponse => {
        return postsResponse.data;
        //return vm.posts;
        // return $http.get(person.commentUrl).then(commentsResponse => {
        //   person.comments = commentsResponse.data
        //   return person
        // })
      });
    };
  }

})();
