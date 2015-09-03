import TopMovieModel from '../model/topMovie.js';
import HttpRequester from '../model/http-requester.js';

    var imdbURl = "http://www.imdb.com/title/";
    var initialURL = 'http://www.omdbapi.com/?t=';

    function loadMovie(title) {
        var promise = new Parse.Promise();

        var movie = new TopMovieModel.TopMovie('def','def','def','def','def',true);
        title = title.replace(/\s/g, '+');
        var searchedURL = initialURL + title;
        HttpRequester.getJSON(searchedURL)
            .then(function(foundMovie) {
                movie.title = foundMovie.Title;
                if (foundMovie.Plot === 'N/A') {
                    movie.description = '';
                } else {
                    movie.description = foundMovie.Plot;
                }

                if (foundMovie.Poster === 'N/A') {
                    movie.image = '../default-poster.jpg';
                } else {
                    movie.image = foundMovie.Poster;
                }

                movie.rating = foundMovie.imdbRating;
                movie.link = imdbURl + foundMovie.imdbID;

                promise.resolve(movie);
            });

        return promise;
    }

export default {loadMovie}