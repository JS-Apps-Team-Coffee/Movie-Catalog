
import MovieModel from '../model/movie.js';
import TopMovieTemplate from '../view/topMovieTemplate.js';

       function moviesController() {

            var top4 = [];
           MovieModel.getTop4Movies().then(function (movies) {
                top4 = movies;

                var movieTemplateHtml = TopMovieTemplate.getTopMovieTemp();
                var template = Handlebars.compile(movieTemplateHtml);

                $('#wrapper').load('view/firstPageTemplate.html', function () {
                    for (var i = 1; i <= 4; i += 1) {
                        var $movieWrapper = $('#top-movie' + i);
                        // var movieTemplateHtml = $('#movie-template').html();
                        $movieWrapper.html(template(top4[i - 1]));
                    }
                });
                (function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
            });
        }
export default {moviesController};