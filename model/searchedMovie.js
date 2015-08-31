define(["/model/movie.js"], function(movie) {

    var searchedMovie = (function(parent) {
        var searchedMovie = Object.create(parent);

        Object.defineProperty(searchedMovie, 'init', {
            value: function(title, year, type, link) {
                parent.init.call(this, title, link);
                this.year = year;
                this.type = type;

                return this;
            }
        });

        Object.defineProperty(searchedMovie, 'year', {
            get: function() {
                return this._year;
            },
            set: function(value) {
                if (value > 0) {
                    this._year = value;
                } else {
                    throw Error("Year can't be smaller than 0!");
                }
            }
        });

        Object.defineProperty(searchedMovie, 'type', {
            get: function() {
                return this._type;
            },
            set: function(value) {
                if (value) {
                    this._type = value;
                } else {
                    throw Error("Type can't be empty!");
                }
            }
        });

        return searchedMovie;
    }(movie));
    
    return searchedMovie;
});
