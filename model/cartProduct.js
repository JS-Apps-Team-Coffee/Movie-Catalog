/**
 * Created by Goran on 8/28/2015.
 */

var CartProduct = Parse.Object.extend("CartProduct", {

    initialize: function (attrs, options) {
        this.set("status","pending");
        this.set("title", "");
        this.set("quantity", 0);
        this.set("price", 0);

    },

    init: function (title, quantity, price) {
        this.set("status","pending");
        this.set("title", title);
        this.set("quantity", quantity);
        this.set("price", price);
    }
});
function createCartProduct() {
    return new CartProduct();
}

export default {createCartProduct};