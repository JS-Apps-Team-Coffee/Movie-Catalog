define(["../model/searched-movies-generator.js",
        "../js/template.js",
        "../node_modules/handlebars/dist/handlebars.js",
        "../model/movie-previewer.js"
    ],
    function(generator, template, handlebars, previewer) {
        function load(searchedParameter) {
            var searchedMoviesAddress = 'http://www.omdbapi.com/?s=' + searchedParameter + '&y=&plot=short&r=json',
                searchedMovies = [];

            generator.searchMovies(searchedMoviesAddress)
                .then(function(movies) {
                    if (movies.length === 0) {
                        alert('No results');
                    }
                    searchedMovies = movies;
                    return template.get('searchedMoviesTemplate');
                })
                .then(function(html) {
                    var searchedMoviesTemplate = handlebars.compile(html);

                    $('#wrapper').html(searchedMoviesTemplate({
                        searchedMovies: searchedMovies
                    }));

                    $('#search-table').on('click', '.search-item', function() {
                        var title = $(this).html(),
                            foundMovie;

                        previewer.loadMovie(title)
                            .then(function(movie) {
                                foundMovie = movie;
                                return template.get('topMovieTemplate');
                            })
                            .then(function(html) {
                                var moviePreviewTemplate = handlebars.compile(html);
                                console.log(foundMovie);
                                $('#top-movie').html(moviePreviewTemplate(foundMovie));
                                console.log('test');                                
                            });
                    });
                });
        }

        return {
            load: load
        };
    });
