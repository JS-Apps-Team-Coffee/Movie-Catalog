

    var Movie = (function(title,link) {
        function Movie (title, link){
            console.log(" Top movie title: "+title);
            this.title = title;
            this.link = link;
        };

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

        return Movie;
    }());

    export default{Movie}


