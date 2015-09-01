 define(["../model/searched-movies-generator.js"], function(generator) {
     function load() {
         generator.searchMovies('http://www.omdbapi.com/?s=taken&y=&plot=short&r=json')
             .then(function(movies) {
                
             });
     }

     return {
     	load: load
     };
 });
