/**
 * Created by Goran on 8/27/2015.
 */

function signUp(username, password, email, mailingAddress) {
    var cart,
        user = new Parse.User();

    user.set("username", username);
    user.set("password", password);
    user.set("email", email);
    user.set("mailingAddress",mailingAddress);
    user.set("carts",[]);

    console.log(user);
    // other fields can be set just like with Parse.Object

    // user.signUp(null, {
    //     success: function (user) {
    //         // Hooray! Let them use the app now.
    //         alert("Sign Up success!");
    //     },
    //     error: function (user, error) {
    //         // Show the error message somewhere and let the user try again.
    //         alert("Error: " + error.code + " " + error.message);
    //     }
    // });
    var promise = new Parse.Promise();
    user.signUp(null).then(function(user) {
            alert('Sign up successfuly!');
            promise.resolve(user);
        },
        function(error) {
            alert("Error: " + error.code + " " + error.message);
            promise.reject("An error occure while Sign in!");
        });
    return promise;
}

export default {signUp};