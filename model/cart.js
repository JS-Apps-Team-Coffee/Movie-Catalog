/**
 * Created by Goran on 8/28/2015.
 */
requirejs(["/model/cartProduct.js"], function(util) {
    var Cart = Parse.Object.extend("Cart", {
        cartProducts: [],
        totalPrice: function () {
            var sum = 0;
            var prod = this.get("cartProducts");
            foreach(p in prod)
            {
                sum += p.get("price");
            }
            return sum;
        },
        addProduct: function (product) {
            this.cartProducts.push(product);
            return this;
        },
        removeProduct: function (product) {
            var index = this.cartProducts.indexOf(product);
            if (index > -1) {
                this.cartProducts.splice(index, 1);
            }
        },
        uploadProducts: function (productList) {
            var promise = new Parse.Promise();
            for (var i = 0, j = this.cartProducts.length; i < j; i += 1) {
                this.cartProducts[i].save();
            }
            setTimeout(function () {
                promise.resolve(this);
            }, 3000);
            return promise;
        }

    });

    function createCart() {
        return new Cart();
    }

});