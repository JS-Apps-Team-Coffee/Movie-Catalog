 define(["../model/searched-movies-generator.js"], function(generator) {

     $(document).ready(function() {
         generator.searchMovies('http://www.omdbapi.com/?s=taken&y=&plot=short&r=json')
             .then(function(movies) {
               console.log(movies);
                 console.log('HERE');
             });
     });
 });