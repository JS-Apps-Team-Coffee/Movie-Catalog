/**
 * Created by Goran on 8/29/2015.
 */
$(document).ready(function () {

    debugger;
    var top4 = [];
    getTop4Movies().then(function (movies) {
        top4 = movies;
        $("#top-movie1").load('view/movieTemplate.html', function (data) {
            console.log($("#top-movie1"));
            debugger;
            $("#top-movie1").find("p[data-info='title']").html(top4[0].title);
            debugger;
            $("#top-movie1").find("p[data-info='description']").html(top4[0].description);
            debugger;
            $("#top-movie1").find("p[data-info='rating']").html(top4[0].rating);
            $("#top-movie1").find("img").attr('src', (top4[0].image));

            $("#top-movie2").load('view/movieTemplate.html', function (data) {
                console.log($("#top-movie2"));
                debugger;
                $("#top-movie2").find("p[data-info='title']").html(top4[1].title);
                debugger;
                $("#top-movie2").find("p[data-info='description']").html(top4[1].description);
                debugger;
                $("#top-movie2").find("p[data-info='rating']").html(top4[1].rating);
                $("#top-movie2").find("img").attr('src', (top4[1].image));

                $("#top-movie3").load('view/movieTemplate.html', function (data) {
                    console.log($("#top-movie3"));
                    debugger;
                    $("#top-movie3").find("p[data-info='title']").html(top4[2].title);
                    debugger;
                    $("#top-movie3").find("p[data-info='description']").html(top4[2].description);
                    debugger;
                    $("#top-movie3").find("p[data-info='rating']").html(top4[2].rating);
                    $("#top-movie3").find("img").attr('src', (top4[2].image));

                    $("#top-movie4").load('view/movieTemplate.html', function (data) {
                        console.log($("#top-movie3"));
                        debugger;
                        $("#top-movie4").find("p[data-info='title']").html(top4[3].title);
                        debugger;
                        $("#top-movie4").find("p[data-info='description']").html(top4[3].description);
                        debugger;
                        $("#top-movie4").find("p[data-info='rating']").html(top4[3].rating);
                        $("#top-movie4").find("img").attr('src', (top4[3].image));
                    })
                })
            })
        })

    })
});
