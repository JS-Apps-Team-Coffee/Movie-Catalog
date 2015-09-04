import MovieParent from '../model/movie.js';


var SearchedMovie = (function (parent) {
    function SearchedMovie(title, year, type, link) {
        parent.call(this, title, link);
        this.year = year;
        this.type = type;

    };

    SearchedMovie.prototype = (function (parent) {
        function F() {
        };
        F.prototype = parent.prototype;
        return new F;
    }(parent));

    Object.defineProperty(SearchedMovie.prototype, 'year', {
        get: function () {
            return this._year;
        },
        set: function (value) {
            if (value) {
                this._year = value;
            } else {
                throw Error("Year can't be empty!");
            }
        }
    });

    Object.defineProperty(SearchedMovie.prototype, 'type', {
        get: function () {
            return this._type;
        },
        set: function (value) {
            if (value) {
                this._type = value;
            } else {
                throw Error("Type can't be empty!");
            }
        }
    });

    return SearchedMovie;
}(MovieParent.Movie));


export default {SearchedMovie}