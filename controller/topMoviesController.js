
import Generator from '../model/top-movies-generator.js';
//import HandleBars from '../node_modules/handlebars/dist/handlebars.js';
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
              
                    $('#wrapper').load('view/firstPageTemplate.html', function() {
                        for (var i = 1; i <= 4; i += 1) {
                            var $movieWrapper = $('#top-movie' + i);

                            $movieWrapper.html(handlebarsTemplate(topMovies[i - 1]));
                        }
                    });
                });

            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        }

       export default {load}
