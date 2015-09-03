import SearchMovieModel from '../model/searchedMovie.js';
import HttpRequester from '../model/http-requester.js';


var imdb = "http://www.imdb.com/title/";

function searchMovies(searchedTitle) {
    var promise = new Parse.Promise(),
        searchedMovies = [],
        i,
        len;

    HttpRequester.getJSON(searchedTitle)
        .then(function (data) {
            var movies = data['Search'];

            if (!movies) {
                movies = [];
            }

            for (i = 0, len = movies.length; i < len; i += 1) {
                var movie = new SearchMovieModel.SearchedMovie(
                        movies[i].Title,
                        movies[i].Year,
                        movies[i].Type,
                        imdb + movies[i].imdbID
                    );

                searchedMovies.push(movie);
            }

            promise.resolve(searchedMovies);

        }, function (error) {
            alert(error.message);
            promise.reject(error.message);
        });

    return promise;
}

export default {searchMovies}
