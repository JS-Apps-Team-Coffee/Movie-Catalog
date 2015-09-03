/**
 * Created by Goran on 8/29/2015.
 */
//$(document).ready(function () {

import LogIn from '../model/logIn.js';
import SignUp from '../model/signUp.js';
import CartProduct from '../model/cartProduct.js';

function load() {

    $("#login-form").load("view/loggerTemplate.html", function () {

        var currentUser = Parse.User.current();

        if (currentUser) {
            $('#toggle-login').hide();
            $('#toggle-signup').hide();
            $('#logout-btn').show();
            $('#toggle-username').html("Hi "+currentUser.get('username')+" !");
            $('#toggle-username').show();
        }

        $('#signup-btn').click(function () {
            var username, password, email, mailingAddress, cart;
            username = $('#su-username').val();
            password = $('#su-password').val();
            email = $('#su-email').val();
            mailingAddress = $('#su-mailing-address').val();
            SignUp.signUp(username, password, email, mailingAddress)
                .then(null, function (error) {
                    alert(error.message);
                });
        });

        $('#login-btn').click(function () {
            var username, password;
            username = $('#li-username').val();
            password = $('#li-password').val();

            LogIn.logIn(username, password).then(function (user) {
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
}
export default {load};