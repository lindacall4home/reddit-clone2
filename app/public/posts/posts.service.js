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
        console.log(postsResponse.data);
        return postsResponse.data;
      });
    };
  }

})();
