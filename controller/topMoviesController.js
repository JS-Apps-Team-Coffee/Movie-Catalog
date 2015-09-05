import Generator from '../model/top-movies-generator.js';
import Template from '../js/template.js';


        function load() {
            var topMovies = [];

            Generator.getTop4Movies()
                .then(function(movies) {
                    topMovies = movies;
                    return Template.get('topMovieTemplate');
                })
                .then(function(html) {
                    var handlebarsTemplate = Handlebars.compile(html);
                        for (var i = 1; i <= 4; i += 1) {
                            var $movieWrapper = $('#top-movie' + i);

                            $movieWrapper.html(handlebarsTemplate(topMovies[i - 1]));
                            FB.XFBML.parse(document.getElementById('top-movie'+i));
                        }

                });


        }

       export default {load}
