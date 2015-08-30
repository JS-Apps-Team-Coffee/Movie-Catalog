/**
 * Created by Goran on 8/29/2015.
 */
$(document).ready(function() {

    debugger;
    var top4 = [];
    getTop4Movies().then(function(movies) {
        top4 = movies;
        $('#wrapper').load('view/firstPageTemplate.html', function() {
            $("#top-movie1").load('view/movieTemplate.html', function(data) {
                console.log($("#top-movie1"));
                // debugger;
                $("#top-movie1").find("p[data-info='title']").html(top4[0].title);
                // debugger;
                $("#top-movie1").find("p[data-info='description']").html(top4[0].description);
                // debugger;
                $("#top-movie1").find("p[data-info='rating']").html(top4[0].rating);
                $("#top-movie1").find("a[data-info='link']").attr("href", (top4[0].link));

                //facebook
                $("#top-movie1").find("a[data-info='fb-like']").attr("name", (top4[0].title));
                $("#top-movie1").find("div[data-info='fb-like']").attr("data-href", ("http://moviecatalog.net84.net/#"+top4[0].title));


                $("#top-movie1").find("img").attr('src', (top4[0].image));

                $("#top-movie2").load('view/movieTemplate.html', function(data) {
                    console.log($("#top-movie2"));
                    // debugger;
                    $("#top-movie2").find("p[data-info='title']").html(top4[1].title);
                    // debugger;
                    $("#top-movie2").find("p[data-info='description']").html(top4[1].description);
                    // debugger;
                    $("#top-movie2").find("p[data-info='rating']").html(top4[1].rating);
                    $("#top-movie2").find("a[data-info='link']").attr("href", (top4[1].link));
                    $("#top-movie2").find("img").attr('src', (top4[1].image));

                    //fb
                    $("#top-movie2").find("a[data-info='fb-like']").attr("name", (top4[1].title));
                    $("#top-movie2").find("div[data-info='fb-like']").attr("data-href", ("http://moviecatalog.net84.net/#"+top4[1].title));

                    $("#top-movie3").load('view/movieTemplate.html', function(data) {
                        console.log($("#top-movie3"));
                        // debugger;
                        $("#top-movie3").find("p[data-info='title']").html(top4[2].title);
                        // debugger;
                        $("#top-movie3").find("p[data-info='description']").html(top4[2].description);
                        // debugger;
                        $("#top-movie3").find("p[data-info='rating']").html(top4[2].rating);
                        $("#top-movie3").find("a[data-info='link']").attr("href", (top4[2].link));
                        $("#top-movie3").find("img").attr('src', (top4[2].image));
                        //fb
                        $("#top-movie3").find("a[data-info='fb-like']").attr("name", (top4[2].title));
                        $("#top-movie3").find("div[data-info='fb-like']").attr("data-href", ("http://moviecatalog.net84.net/#"+top4[2].title));

                        $("#top-movie4").load('view/movieTemplate.html', function(data) {
                            console.log($("#top-movie3"));
                            // debugger;
                            $("#top-movie4").find("p[data-info='title']").html(top4[3].title);
                            // debugger;
                            $("#top-movie4").find("p[data-info='description']").html(top4[3].description);
                            // debugger;
                            $("#top-movie4").find("p[data-info='rating']").html(top4[3].rating);
                            $("#top-movie4").find("a[data-info='link']").attr("href", (top4[3].link));
                            $("#top-movie4").find("img").attr('src', (top4[3].image));
                            //fb
                            $("#top-movie4").find("a[data-info='fb-like']").attr("name", (top4[3].title));
                            $("#top-movie4").find("div[data-info='fb-like']").attr("data-href", ("http://moviecatalog.net84.net/#"+top4[3].title));


                            (function(d, s, id) {
                                var js, fjs = d.getElementsByTagName(s)[0];
                                if (d.getElementById(id)) return;
                                js = d.createElement(s); js.id = id;
                                js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
                                fjs.parentNode.insertBefore(js, fjs);
                            }(document, 'script', 'facebook-jssdk'));
                        })
                    })
                })
            })

        })
    });
});
