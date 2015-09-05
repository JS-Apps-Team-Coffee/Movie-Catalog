/**
 * Created by Goran on 9/1/2015.
 */

import ServerInit from 'js/serverInit.js';
import LoggerController from '../controller/loggerController.js';
import TopMoviesController from '../controller/topMoviesController.js';
import SearchController from '../controller/searchedMoviesController.js';
import CartController from '../controller/cartController.js';
import SlideShow from '../controller/slideShow.js';



export function init(){
    LoggerController.load();
    CartController.load();



    var app = Sammy('#wrapper', function() {

        this.get('#/', function() {
            $('#wrapper').load('view/firstPageTemplate.html', function() {
                SlideShow.load();
                TopMoviesController.load();
            });
        });
        this.get('#/home',function(){
            this.redirect('#/');
        })
        this.get('#/search/:title', function() {
            var searchedParameter = this.params.title;
            SearchController.load(searchedParameter);
            //(function(d, s, id) {
            //    var js, fjs = d.getElementsByTagName(s)[0];
            //    if (d.getElementById(id)) return;
            //    js = d.createElement(s);
            //    js.id = id;
            //    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
            //    fjs.parentNode.insertBefore(js, fjs);
            //}(document, 'script', 'facebook-jssdk'));
        });


    }).run('#/');
}