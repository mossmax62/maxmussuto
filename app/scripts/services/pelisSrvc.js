'use strict';

/**
 * @ngdoc service
 * @name maxmussutoApp.pelis
 * @description
 * # pelis
 * Service in the maxmussutoApp.
 */
angular.module('maxmussutoApp')
  .service('pelisSrvc', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var apikey = 'aa3edba062fc9d710be22c80f4c8e146';
        var url='http://api.themoviedb.org/3/:type/:id'
        return $resource(url, { api_key: apikey,append_to_response: 'casts,trailers,images,similar_movie'},
            {
                'getMovies': { method:'get',isArray:false },
                'getGenre': { method:'get',isArray:false ,url:'http://api.themoviedb.org/3/genre/:type/:id'}
            });
  });
