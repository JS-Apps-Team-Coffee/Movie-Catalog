define(["/model/movie.js"], function(movie) {

    var topMovie = (function(parent) {
        var topMovie = Object.create(parent);

        Object.defineProperty(topMovie, 'init', {
            value: function(title, description, image, rating, link) {
                parent.init.call(this, title, link);
                this.description = description;
                this.image = image;
                this.rating = rating;

                return this;
            }
        });

        Object.defineProperty(topMovie, 'description', {
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

        Object.defineProperty(topMovie, 'image', {
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

        Object.defineProperty(topMovie, 'rating', {
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

        return topMovie;
    }(movie));

    return topMovie;    
});
