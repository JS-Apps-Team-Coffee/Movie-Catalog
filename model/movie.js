define(function() {

    var movie = (function() {
        var movie = {};

        Object.defineProperty(movie, 'init', {
            value: function(title, link) {
                this.title = title;
                this.link = link;

                return this;
            }
        });

        Object.defineProperty(movie, 'title', {
            get: function() {
                return this._title;
            },
            set: function(value) {
                if (value) {
                    this._title = value;
                } else {
                    throw Error("Title can't be  empty!");
                }
            }
        });

        Object.defineProperty(movie, 'link', {
            get: function() {
                return this._link;
            },
            set: function(value) {
                if (value) {
                    this._link = value;
                } else {
                    throw Error("Link can't be  empty!");
                }
            }
        });

        return movie;
    }());

    return movie;
});
