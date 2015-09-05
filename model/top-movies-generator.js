/* global Parse*/

import TopMovieModel from './topMovie.js';
import HttpRequester from './http-requester.js';


    var imdb = "http://www.imdb.com/title/";
    var topMovies = [];

    var top1 = "http://www.omdbapi.com/?t=taken&y=&plot=short&r=json",
        top2 = "http://www.omdbapi.com/?t=Boyhood&y=2014&plot=short&r=json",
        top3 = "http://www.omdbapi.com/?t=Gravity&y=&plot=short&r=json",
        top4 = "http://www.omdbapi.com/?t=Argo&y=&plot=short&r=json";

var moviesUrls = [];
moviesUrls.push(top1);
moviesUrls.push(top2);
moviesUrls.push(top3);
moviesUrls.push(top4);

    function getTop4Movies() {

        console.log("In generator!");

        var promise = new Parse.Promise(),
            top4M = [],
            i,
            len;

        try {
            var retrievedObject = localStorage.getItem('topMovies');
            top4M = JSON.parse(retrievedObject);
        } catch (error) {
        }

        if (top4M && top4M.length > 0) {
            for (i = 0, len = top4M.length; i < len; i += 1) {
                var movie = new TopMovieModel.TopMovie(
                    top4M[i]._title,
                    top4M[i]._description,
                    top4M[i]._image,
                    top4M[i]._rating,
                    top4M[i]._link
                );


                topMovies.push(movie);
            }

            promise.resolve(topMovies);

            return promise;
        }


        var coll = moviesUrls.slice(0);

        (function insertOne() {
            var record = coll.splice(0, 1)[0]; // get the first record of coll and reduce coll by one
            console.log("Top movie generator record :"+record);
            HttpRequester.getJSON(record).then(function (product) {

                console.log(product);
                var movie = new TopMovieModel.TopMovie(
                    product.Title,
                    product.Plot,
                    product.Poster,
                    product.imdbRating,
                    imdb + product.imdbID
                );

                topMovies.push(movie);

                if (coll.length === 0) {
                    console.log("The new  cart product list  is: ");
                    console.log(coll);

                    localStorage.setItem('topMovies', JSON.stringify(topMovies));

                    promise.resolve(coll);
                } else {
                    insertOne();
                }

            }, function (error) {
                promise.reject(error.message);
            })
        })();

        return promise;
    }

  export default {getTop4Movies}


