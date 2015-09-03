/**
 * Created by Goran on 9/1/2015.
 */

import ServerInit from 'js/serverInit.js';
import LoggerController from '../controller/loggerController.js';
import TopMoviesController from '../controller/topMoviesController.js';
import SearchController from '../controller/searchedMoviesController.js';
import CartController from '../controller/cartController.js';

export function init(){
    LoggerController.load();
    CartController.load();

    var app = Sammy('#wrapper', function() {

        this.get('#/', function() {
            TopMoviesController.load();
        });

        this.get('#/search/:title', function() {
            var searchedParameter = this.params.title;

            SearchController.load(searchedParameter);
        });


    }).run('#/');
}