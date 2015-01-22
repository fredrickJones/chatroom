'use strict';
var app = angular.module('chatroom');

app.service('parseService', function($http, $q) {
  this.getData = function() {
    return $http({
      method: 'GET',
      url: 'https://api.parse.com/1/classes/chat?order=-createdAt'
    }).then(function(res) {
        return res.data.results;
    });
  };

  this.postData = function(message) {
    return $http({
        method: 'POST',
        url: 'https://api.parse.com/1/classes/chat',
        parms: {sort: 'ascending'},
        data: {text: message}
    }).then(function(data) {
      deferred.resolve(data.data.results);
    });
  };
});
















