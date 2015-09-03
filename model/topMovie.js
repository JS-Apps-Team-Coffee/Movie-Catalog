import MovieParent from './movie.js';


    var TopMovie = (function(parent) {
         function TopMovie (title, description, image, rating, link){
             parent.call(this, title, link);
             this.description = description;
             this.image = image;
             this.rating = rating;
        }

        TopMovie.prototype = (function(parent){
            function F(){};
            F.prototype = parent.prototype;
            return new F;
        }(parent));

        Object.defineProperty(TopMovie.prototype , 'description', {
            get: function() {
                return this._description;
            },
            set: function(value) {
                if (value) {
                    this._description = value;
                } else {
                    throw Error("Description can't be  empty!");
                }
            }
        });

        Object.defineProperty(TopMovie.prototype , 'image', {
            get: function() {
                return this._image;
            },
            set: function(value) {
                if (value) {
                    this._image = value;
                } else {
                    throw Error("Image property can't be  empty!");
                }
            }
        });

        Object.defineProperty(TopMovie.prototype , 'rating', {
            get: function() {
                return this._rating;
            },
            set: function(value) {
                if (value) {
                    this._rating = value;
                } else {
                    throw Error("Rating can't be empty!");
                }
            }
        });

        return TopMovie;
    }(MovieParent.Movie));


export default {TopMovie}