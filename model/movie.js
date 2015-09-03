/* global Parse*/

console.log("Vo localstorige!");
    var imdb = "http://www.imdb.com/title/";
    var topMovies = [];

    var top1 = "http://www.omdbapi.com/?t=taken&y=&plot=short&r=json",
        top2 = "http://www.omdbapi.com/?t=Boyhood&y=2014&plot=short&r=json",
        top3 = "http://www.omdbapi.com/?t=Gravity&y=&plot=short&r=json",
        top4 = "http://www.omdbapi.com/?t=Argo&y=&plot=short&r=json";


    function Movie (){ };

    Object.defineProperty(Movie.prototype, 'init', {
        value: function (title, description, image, rating, link) {
            this.title = title;
            this.description = description;
            this.image = image;
            this.rating = rating;
            this.link = link;
            return this;
        }
    });
    Object.defineProperty(Movie.prototype, 'link', {
        get: function () {
            return this._link;
        },
        set: function (value) {
            if (value) {
                this._link = value;
            } else {
                throw Error("Link can't be  empty!");
            }
        }
    });
    Object.defineProperty(Movie.prototype, 'title', {
        get: function () {
            return this._title;
        },
        set: function (value) {
            if (value) {
                this._title = value;
            } else {
                throw Error("Title can't be  empty!");
            }
        }
    });
    Object.defineProperty(Movie.prototype, 'description', {
        get: function () {
            return this._description;
        },
        set: function (value) {
            if (value) {
                this._description = value;
            } else {
                throw Error("Description can't be  empty!");
            }
        }
    });
    Object.defineProperty(Movie.prototype, 'image', {
        get: function () {
            return this._image;
        },
        set: function (value) {
            if (value) {
                this._image = value;
            } else {
                throw Error("Image property can't be  empty!");
            }
        }
    });
    Object.defineProperty(Movie.prototype, 'rating', {
        get: function () {
            return this._rating;
        },
        set: function (value) {
            if (value) {
                this._rating = value;
            } else {
                throw Error("Rating can't be empty!");
            }
        }
    });

    function getTop4Movies() {
        var promise = new Parse.Promise(),
            top4M,
            i,
            len;

        try {
            var retrievedObject = localStorage.getItem('topMovies');
            top4M = JSON.parse(retrievedObject);
        } catch (error) {
        }

        console.log("aaaaaaaaaaaaaaaa!");
        // console.log(top4M);
        if (top4M && top4M.length > 0) {


            for (i = 0, len = top4M.length; i < len; i += 1) {
                var movie = new Movie();
                movie.description = top4M[i]._description;
                movie.title = top4M[i]._title;
                movie.image = top4M[i]._image;
                movie.rating = top4M[i]._rating;
                movie.link = top4M[i]._link;

                topMovies.push(movie);
            }

            promise.resolve(topMovies);
            debugger;
            console.log("Vo localstorige!");
            return promise;
        }

        $.ajax({
            url: top1
        }).then(function (movie) {

            var firstMovie = new Movie();
            firstMovie.title = movie.Title;
            firstMovie.description = movie.Plot;
            firstMovie.image = movie.Poster;
            firstMovie.rating = movie.imdbRating;
            firstMovie.link = imdb + movie.imdbID;
            topMovies.push(firstMovie);
            return $.ajax({
                url: top2
            });
        }).then(function (movie) {

            var firstMovie = new Movie();
            firstMovie.title = movie.Title;
            firstMovie.description = movie.Plot;
            firstMovie.image = movie.Poster;
            firstMovie.rating = movie.imdbRating;
            firstMovie.link = imdb + movie.imdbID;
            topMovies.push(firstMovie);
            return $.ajax({
                url: top3
            });
        }).then(
            function (movie) {

                var firstMovie = new Movie();
                firstMovie.title = movie.Title;
                firstMovie.description = movie.Plot;
                firstMovie.image = movie.Poster;
                firstMovie.rating = movie.imdbRating;
                firstMovie.link = imdb + movie.imdbID;
                topMovies.push(firstMovie);
                return $.ajax({
                    url: top4
                });
            }).then(function (movie) {

                var firstMovie = new Movie();
                firstMovie.title = movie.Title;
                firstMovie.description = movie.Plot;
                firstMovie.image = movie.Poster;
                firstMovie.rating = movie.imdbRating;
                firstMovie.link = imdb + movie.imdbID;
                topMovies.push(firstMovie);
                alert("Uraaaa");
                localStorage.setItem('topMovies', JSON.stringify(topMovies));
                promise.resolve(topMovies);
            }, function (error) {
                alert(error.message);
                promise.reject(error.message);
            });

        console.log("MOvie Promiseee!");
        return promise;
    }


export default {getTop4Movies};
