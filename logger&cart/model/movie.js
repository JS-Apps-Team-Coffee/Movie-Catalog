/**
 * Created by Goran on 8/29/2015.
 */


var recentMovies = [];

var topMovies = [];

var top1 = "http://www.omdbapi.com/?t=taken&y=&plot=short&r=json",
    top2 = "http://www.omdbapi.com/?t=Boyhood&y=2014&plot=short&r=json",
    top3 = "http://www.omdbapi.com/?t=Gravity&y=&plot=short&r=json",
    top4 = "http://www.omdbapi.com/?t=Argo&y=&plot=short&r=json";


var Movie = {};

Object.defineProperty(Movie, 'init', {
    value: function (title, description, image, rating) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.rating = rating;
        return this;
    }
});

Object.defineProperty(Movie, 'title', {
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

Object.defineProperty(Movie, 'description', {
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

Object.defineProperty(Movie, 'image', {
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

Object.defineProperty(Movie, 'rating', {
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


    var promise = new Parse.Promise();

    try{
    var retrievedObject = localStorage.getItem('topMovies');
    var top4M = JSON.parse(retrievedObject);
    }
    catch (error){
    }
    console.log(top4M);
    if (top4M && top4M.length > 0) {
        var move1 = Object.create(Movie);
            move1.description = top4M[0]._description;
            move1.title = top4M[0]._title;
            move1.image = top4M[0]._image;
            move1.rating = top4M[0]._rating;
        var move2 = Object.create(Movie);
            move2.description = top4M[1]._description;
            move2.title = top4M[1]._title;
            move2.image = top4M[1]._image;
            move2.rating = top4M[1]._rating;
        var move3 = Object.create(Movie);
            move3.description = top4M[0]._description;
            move3.title = top4M[2]._title;
            move3.image = top4M[2]._image;
            move3.rating = top4M[2]._rating;
        var move4 = Object.create(Movie);
            move4.description = top4M[0]._description;
            move4.title = top4M[3]._title;
            move4.image = top4M[3]._image;
            move4.rating = top4M[3]._rating;

        topMovies.push(move1);
        topMovies.push(move2);
        topMovies.push(move3);
        topMovies.push(move4);

        promise.resolve(topMovies);
        debugger;
        return promise;
    }
    $.ajax({
        url: top1
    }).then(function (move) {


        var firstMovie = Object.create(Movie);
        firstMovie.title = move.Title;
        firstMovie.description = move.Plot;
        firstMovie.image = move.Poster;
        firstMovie.rating = move.imdbRating;
        topMovies.push(firstMovie);
        return $.ajax({url: top2});
    }).then(function (move) {


            var firstMovie = Object.create(Movie);
            firstMovie.title = move.Title;
            firstMovie.description = move.Plot;
            firstMovie.image = move.Poster;
            firstMovie.rating = move.imdbRating;
            topMovies.push(firstMovie);
            return $.ajax({url: top3});
        }
    ).then(
        function (move) {


            var firstMovie = Object.create(Movie);
            firstMovie.title = move.Title;
            firstMovie.description = move.Plot;
            firstMovie.image = move.Poster;
            firstMovie.rating = move.imdbRating;
            topMovies.push(firstMovie);
            return $.ajax({url: top4});
        }).then(function (move) {


            var firstMovie = Object.create(Movie);
            firstMovie.title = move.Title;
            firstMovie.description = move.Plot;
            firstMovie.image = move.Poster;
            firstMovie.rating = move.imdbRating;
            topMovies.push(firstMovie);
            alert("Uraaaa");
            localStorage.setItem('topMovies', JSON.stringify(topMovies));
            promise.resolve(topMovies);
        }, function (error) {
            alert(error.message);
            promise.reject(error.message);
        });


    return promise;
}

