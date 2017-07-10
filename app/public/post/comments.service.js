(function() {
  'use strict';

  angular
    .module('app')
    .service('commentsService', service);

  service.$inject = ['$http'];

  function service($http) {
    const vm = this;

    this.getCommentsForPost = function(postId) {
      return $http.get('/api/posts/' + postId + '/comments/')
      .then(commentsResponse => {
        return commentsResponse.data;
      });
    };
  }


})();
