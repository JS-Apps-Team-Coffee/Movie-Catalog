 requirejs(["../model/movie.js"], function(util) {
     $(document).ready(function() {
         // var movieController = function() {
         var top4 = [];
         getTop4Movies().then(function(movies) {
             top4 = movies;
             $('#wrapper').load('view/firstPageTemplate.html', function() {
                 for (var i = 1; i <= 4; i += 1) {
                     var $movieWrapper = $('#top-movie' + i);
                     var movieTemplateHtml = $('#movie-template').html();
                     var template = Handlebars.compile(movieTemplateHtml);

                     $movieWrapper.html(template(top4[i - 1]));
                 }
             });
         });
     });
 });
