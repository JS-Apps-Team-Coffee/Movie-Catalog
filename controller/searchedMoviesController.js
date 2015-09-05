import Generator from '../model/searched-movies-generator.js';
import Template from '../js/template.js';
import HandleBars from '../node_modules/handlebars/dist/handlebars.js';
import Previewer from '../model/movie-previewer.js';

//$('#search-btn').on('click', function(){
//    var param = $('#search-input').val();
//    param = param.replace(/\s/g, '+');
//    var initialPage = location.pathname;
//    location.replace(initialPage + '#/search/' + param);
//});
// search button
$('#search-input').on('input', function () {
    var title = $(this).val().replace(/\s/g, '+');

    $('#link-1').attr('href', '#/search/' + title);
});

function load(searchedParameter) {
    var searchedMoviesAddress = 'http://www.omdbapi.com/?s=' + searchedParameter + '&y=&plot=short&r=json',
        searchedMovies = [];


    Generator.searchMovies(searchedMoviesAddress)
        .then(function (movies) {
            if (movies.length === 0) {
                $('#wrapper').load('view/alertTemplate.html');
                return;
            }

            searchedMovies = movies;
            return Template.get('searchedMoviesTemplate');
        })
        .then(function (html) {
            var searchedMoviesTemplate = HandleBars.compile(html);

            $('#wrapper').html(searchedMoviesTemplate({
                searchedMovies: searchedMovies
            }));

            $('#search-table').on('click', '.search-item', function () {
                var title = $(this).html(),
                    foundMovie;

                var fb = document.getElementById("facebook-jssdk");
                if (fb) {
                    fb.parentNode.removeChild(fb);
                }

                Previewer.loadMovie(title)
                    .then(function (movie) {
                        ///fb

                        foundMovie = movie;

                        return Template.get('topMovieTemplate');
                    })
                    .then(function (html) {
                        var moviePreviewTemplate = HandleBars.compile(html)
                        console.log(foundMovie);
                        $('#top-movie').html('');
                        $('#top-movie').html(moviePreviewTemplate(foundMovie));
                        console.log('test');
                        FB.XFBML.parse(document.getElementById('top-movie'));

                    });
            });
        });
}

export default {load}
