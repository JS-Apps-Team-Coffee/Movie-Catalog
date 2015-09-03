/**
 * Created by Goran on 8/27/2015.
 */
function logIn(username, password) {
    var user = new Parse.User();
    var promise = new Parse.Promise();
    Parse.User.logIn(username, password)
        .then(function(user) {
            promise.resolve(user);
        }, function(error) {
            alert("Error: " + error.message);
            promise.reject("An error occure while log in!");
        });

    return promise;
}

export default {logIn};