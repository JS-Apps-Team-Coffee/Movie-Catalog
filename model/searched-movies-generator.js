define(["/model/searchedMovie.js", "/model/http-requester.js"], function(searchedMovie, httpRequester) {

    var imdb = "http://www.imdb.com/title/";

    function searchMovies(searchedTitle) {
        var promise = new Parse.Promise(),
            searchedMovies = [],
            i,
            len;

        httpRequester.getJSON(searchedTitle)
            .then(function(data) {
                var movies = data['Search'];
                for (i = 0, len = movies.length; i < len; i += 1) {
                    var movie = Object.create(searchedMovie);
                    movie.title = movies[i].Title;
                    movie.year = movies[i].Year;
                    movie.link = imdb + movies[i].imdbID;
                    movie.type = movies[i].Type;

                    searchedMovies.push(movie);
                }

                promise.resolve(searchedMovies);

            }, function(error) {
                alert(error.message);
                promise.reject(error.message);
            });

        return promise;
    }

    return {
        searchMovies: searchMovies
    };
});
