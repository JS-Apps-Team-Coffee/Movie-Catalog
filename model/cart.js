import cartProduct from './cartProduct.js';
import _ from '../node_modules/underscore/underscore-min.js';

var Cart = Parse.Object.extend("Cart", {
    cartProducts: [],
    totalPrice: function () {
        var sum = 0;
        for (var i = 0, l = this.cartProducts.length; i < l; i += 1) {
            sum += this.cartProducts[i].get('price')*this.cartProducts[i].get('quantity');
        }
        return sum;
    },
    addProduct: function (product) {
        console.log(product.title);
        var indexOfExistent;
        var existentMovie = _.find(this.cartProducts, function (movie, index) {
            console.log("New movie title: " + product.get('title'));
            console.log("Movie title from array: " + movie.get('title'));
            indexOfExistent = index;
            return movie.get('title') === product.get('title');

        });
        if (existentMovie) {
            var q = this.cartProducts[indexOfExistent].get('quantity');
            q += 1;
            this.cartProducts[indexOfExistent].set('quantity', q);
            console.log('movie exsist quantity = ' + this.cartProducts[indexOfExistent].get('quantity'));
        } else {
            this.cartProducts.push(product);
            console.log("movie pushed in array, array is: ");
            console.log(this.cartProducts);
        }
        return this;
    },
    removeProduct: function (title) {
        for(var i= 0,l=this.cartProducts.length;i<l;i+=1){
            if((this.cartProducts[i].get('title'))===title){
                var q =this.cartProducts[i].get('quantity');
                if(q>1){
                    q-=1;
                    this.cartProducts[i].set('quantity',q);
                }else{
                    this.cartProducts.splice(i, 1);
                }
            }
        }
        return this;
    },
    uploadProducts: function () {

        var promise = new Parse.Promise();
        var coll = this.cartProducts.slice(0);
        console.log("tuka !");
        console.log(this.cartProducts);
        var newColl = [];
        (function insertOne() {
            var record = coll.splice(0, 1)[0]; // get the first record of coll and reduce coll by one
            console.log("Record");
            console.log(record);
            record.save().then(function (product) {
                newColl.push(record);
                if (coll.length === 0) {
                    coll = newColl;

                    console.log("The new  cart product list  is: ");
                    console.log(coll);
                    promise.resolve(coll);
                } else {
                    insertOne();
                }

            }, function (error) {
                promise.reject(error.message);
            })
        })();

        return promise;
    },

    getQuantity: function () {
        var result = 0;
        for(var i= 0,l=this.cartProducts.length;i<l;i+=1){
            result+=this.cartProducts[i].get('quantity');
        }
        return result;
    }

});

function createCart() {
    return new Cart();
}

export default {createCart}