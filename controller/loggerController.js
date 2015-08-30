/**
 * Created by Goran on 8/29/2015.
 */
//$(document).ready(function () {

    requirejs(["../model/logIn.js"], function(util) {

        requirejs(["../model/signUp.js"], function (util) {

            $("#login-form").load("view/loggerTemplate.html", function () {

                var currentUser = Parse.User.current();

                if (currentUser) {
                    $('#toggle-login').hide();
                    $('#toggle-signup').hide();
                    $('#logout-btn').show();
                    $('#toggle-username').html(currentUser.get('username'));
                    $('#toggle-username').show();
                }

                $('#signup-btn').click(function () {
                    var username, password, email, mailingAddress, cart;
                    username = $('#su-username').val();
                    password = $('#su-password').val();
                    email = $('#su-email').val();
                    mailingAddress = $('#su-mailing-address').val();
                    signUp(username, password, email, mailingAddress).then(function (user) {
                        var product = createCartProduct();
                        product.init("Hulk", 4, 10);

                        var usercart = user.get("cart");
                        usercart.addProduct(product);
                        usercart.uploadProducts().then(function (cart) {
                            var relation = usercart.relation("cartProducts");
                            relation.add(usercart.cartProducts);
                            usercart.save().then(function () {
                                alert("Cart was saved");
                            });
                        }, function (error) {
                            alert(error.message);
                        });
                        ////////var relation =  usercart.relation("cartProduct");
                        ////  product.save().then(function(prod){

                        ////      relation.add(product);
                        //     console.log("relkation is : "+ relation);
                        //     //usercart.addProduct(product);
                        //     usercart.save().then(function(cart){
                        //         console.log("Cart was saved!");
                        //});

                    });

                });
                // });
                $('#login-btn').click(function () {
                    var username, password;
                    username = $('#li-username').val();
                    password = $('#li-password').val();

                    logIn(username, password).then(function (user) {
                            console.log('vtor promis');

                            // The current user is now set to user.
                            alert("Session for user: " + user.get("username"))
                            $('#toggle-login').hide();
                            $('#toggle-signup').hide();
                            $('#logout-btn').show();
                            $('#login').hide();
                            $('#toggle-username').html('Hi ' + user.get("username") + ' !');
                            $('#toggle-username').show();
                            console.log('promisooo raboteee');
                        }
                    );
                });

                $('#logout-btn').click(function () {
                    Parse.User.logOut();
                    $('#toggle-login').show();
                    $('#toggle-signup').show();
                    $('#logout-btn').hide();
                    $('#toggle-username').html('');
                    $('#toggle-username').hide();
                });

                $('#toggle-login').click(function () {
                    $('#signup').hide();
                    $('#login').toggle();
                    $('.triangle').removeClass('triangle-signup');
                    $('.triangle').addClass('triangle-login');
                });

                $('#toggle-signup').click(function () {
                    $('#login').hide();
                    $('#signup').toggle();
                    $('.triangle').removeClass('triangle-login');
                    $('.triangle').addClass('triangle-signup');
                });


            });

        });
    });
//});