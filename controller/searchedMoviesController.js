import Generator from '../model/searched-movies-generator.js';
import Template from '../js/template.js';
import HandleBars from '../node_modules/handlebars/dist/handlebars.js';
import Previewer from '../model/movie-previewer.js';

// search button
$('#search-input').on('input', function() {
    var title = $(this).val().replace(/\s/g, '+');

    $('#link').attr('href', '#/search/' + title);
});

function load(searchedParameter) {
    var searchedMoviesAddress = 'http://www.omdbapi.com/?s=' + searchedParameter + '&y=&plot=short&r=json',
        searchedMovies = [];



    Generator.searchMovies(searchedMoviesAddress)
        .then(function(movies) {
            if (movies.length === 0) {
                // alert('No results');

                $('#wrapper').load('view/alertTemplate.html');
                return;
            }
            searchedMovies = movies;
            return Template.get('searchedMoviesTemplate');
        })
        .then(function(html) {
            var searchedMoviesTemplate = HandleBars.compile(html);

            $('#wrapper').html(searchedMoviesTemplate({
                searchedMovies: searchedMovies
            }));

            $('#search-table').on('click', '.search-item', function() {
                var title = $(this).html(),
                    foundMovie;

                Previewer.loadMovie(title)
                    .then(function(movie) {
                        ///fb
                        (function(d, s, id) {
                            var js, fjs = d.getElementsByTagName(s)[0];
                            if (d.getElementById(id)) return;
                            js = d.createElement(s);
                            js.id = id;
                            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
                            fjs.parentNode.insertBefore(js, fjs);
                        }(document, 'script', 'facebook-jssdk'));

                        foundMovie = movie;

                        return Template.get('topMovieTemplate');
                    })
                    .then(function(html) {
                        var moviePreviewTemplate = HandleBars.compile(html)
                        console.log(foundMovie);
                        $('#top-movie').html('');
                        $('#top-movie').html(moviePreviewTemplate(foundMovie));
                        console.log('test');
                    });
            });
        });
}

export default {
    load
}