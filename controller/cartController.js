/**
 * Created by Goran on 8/29/2015.
 */
//$(document).ready(function () {
    requirejs(["../model/cart.js"], function(util) {
        $("#cart-tempate").load("view/cartTemplate.html", function () {

            $("button[data-info='add-to-cart']").click(function () {

            });

            $("#cart-button").click(function () {
                $("#cart").toggleClass('open');
            });
        });
    });
   // });