define(["../model/top-movies-generator.js",
        "../js/template.js",
        "../node_modules/handlebars/dist/handlebars.js"
    ],
    function(generator, template, handlebars) {
        function load() {
            var topMovies = [];

            generator.getTop4Movies()
                .then(function(movies) {
                    topMovies = movies;
                    return template.get('topMovieTemplate');
                })
                .then(function(html) {
                    var handlebarsTemplate = handlebars.compile(html);
              
                    $('#wrapper').load('view/firstPageTemplate.html', function() {
                        for (var i = 1; i <= 4; i += 1) {
                            var $movieWrapper = $('#top-movie' + i);

                            $movieWrapper.html(handlebarsTemplate(topMovies[i - 1]));
                        }
                    });
                });

            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        }

        return {
            load: load
        };
    });
