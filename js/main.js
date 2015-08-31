/**
 * Created by Goran on 8/30/2015.
 */
requirejs(["js/serverInit.js"], function(util) {
    requirejs(["../controller/loggerController.js"], function(util) {
        requirejs(["../controller/cartController.js"], function(util) {
            requirejs(["../controller/moviesController.js"], function(util) {
                requirejs(["../controller/searchedMoviesController.js"], function(util) {
                    console.log("Everything work fine!");
                });
            });
        });
    });
});
