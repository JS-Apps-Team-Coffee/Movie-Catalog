define(["/model/topMovie.js", "/model/http-requester.js"], function(topMovie, httpRequester) {

    var imdbURl = "http://www.imdb.com/title/";
    var initialURL = 'http://www.omdbapi.com/?t=';

    function loadMovie(title) {
        var promise = new Parse.Promise();

        var movie = Object.create(topMovie);
        title = title.replace(/\s/g, '+');
        var searchedURL = initialURL + title;
        httpRequester.getJSON(searchedURL)
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

    return {
        loadMovie: loadMovie
    };
});
