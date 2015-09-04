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