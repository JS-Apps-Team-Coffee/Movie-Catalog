import Generator from '../model/searched-movies-generator.js';
import Template from '../js/template.js';
import HandleBars from '../node_modules/handlebars/dist/handlebars.js';
import Previewer from '../model/movie-previewer.js';


function load(searchedParameter) {
    var searchedMoviesAddress = 'http://www.omdbapi.com/?s=' + searchedParameter + '&y=&plot=short&r=json',
        searchedMovies = [];

    Generator.searchMovies(searchedMoviesAddress)
        .then(function (movies) {
            if (movies.length === 0) {
                alert('No results');
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

                Previewer.loadMovie(title)
                    .then(function (movie) {
                        foundMovie = movie;
                        return Template.get('topMovieTemplate');
                    })
                    .then(function (html) {
                        var moviePreviewTemplate = HandleBars.compile(html)
                            console.log(foundMovie);
                        $('#top-movie').html('');
                            $('#top-movie').html(moviePreviewTemplate(foundMovie));
                            console.log('test');
                        });
                    });
        });
}

export default {load}
