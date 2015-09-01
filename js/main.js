/**
 * Created by Goran on 8/30/2015.
 */
// requirejs(["js/serverInit.js"], function(util) {
//     requirejs(["../controller/loggerController.js"], function(util) {
//         requirejs(["../controller/cartController.js"], function(util) {
//             requirejs(["../controller/moviesController.js"], function(util) {
//                 requirejs(["../controller/searchedMoviesController.js"], function(util) {
//                     console.log("Everything work fine!");
//                 });
//             });
//         });
//     });
// });

require(["js/serverInit.js",
        "../controller/loggerController.js",
        "../controller/cartController.js",
        "../controller/topMoviesController.js",
        "../controller/searchedMoviesController.js"
    ],
    function(server, loggerController, cartController, moviesController, searchedMoviesController) {
        var app = Sammy('#wrapper', function() {

            this.get('#/', function() {
                moviesController.load();
            });

        }).run('#/');
    });
