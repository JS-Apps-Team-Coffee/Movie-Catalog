/**
 * Created by Goran on 8/29/2015.
 */
//$(document).ready(function () {
import Cart from '../model/cart.js';
import CartProduct from '../model/cartProduct.js';
import CartProductTemplate from '../view/cartProductTemplate.js';

Handlebars.registerHelper("getTitle", function (cartProduct) {
    var html = cartProduct.get('title');
    return html;
});
Handlebars.registerHelper("getPrice", function (cartProduct) {
    var html = "$" + cartProduct.get('price');
    return html;
});

function cartController() {
    $("#cart-tempate").load("view/cartTemplate.html", function () {


        alert("Cart template render success!");
        var cart;

        var cartProductTemplateHtml = CartProductTemplate.cartProductTemplate();
        var template = Handlebars.compile(cartProductTemplateHtml);

        $("#wrapper").on('click', "button[data-info='add-to-cart']", function (e) {
            alert("Tuka");
            var $parent;
            if(e.target instanceof HTMLButtonElement){
                $parent = $(e.target).parent();
            }else{
                $parent = $($(e.target).parent()).parent();
            }
            var title = $parent.find("p[data-info='title']").html();

            if (cart === undefined) {
                cart = Cart.createCart();
            }

            var product = CartProduct.createCartProduct();
            product.init(title, 1, 10);
            console.log("product :");
            console.log(product);
            cart.addProduct(product);

            console.log("Product with name: " + title + " has been added in the cart:");
            console.log(cart);
            $('#movies-in-cart').prepend(template(product));
            $('#total-price').html('$' + cart.totalPrice());
            $('#cart-total-products').html(cart.getQuantity() + ' item(s)');

        });

        $("#cart-check-out").click(function (e) {
            console.log("cart before check out! :");
            console.log(cart);
            cart.uploadProducts().then(function () {
                console.log("List of products after update!");
                console.log(cart.cartProducts);
                return cart.save();
            })
                .then(function (successCart) {
                    console.log("Vo relacijata");
                    var relation = successCart.relation("cartProducts");
                    console.log("Pred relacijata  cartProducts ");
                    console.log(successCart.cartProducts);
                    relation.add(successCart.cartProducts);
                    return successCart.save();

                })
                .then(function (crt) {
                    var user = Parse.User.current();
                    var usercart = user.relation("carts");
                    usercart.add(crt);
                    return user.save();
                });
        });

        $("#cart-button").click(function () {
            $("#cart").toggleClass('open');
        });

        $("#movies-in-cart").on('click', "button[data-info='remove']", function (e) {
            alert("Remove button clicked!");
            var parent, title;
            if (e.target instanceof HTMLButtonElement) {
                parent = $($(e.target).parent()).parent();
            } else {
                parent = $($($(e.target).parent()).parent()).parent();
            }
            title = $($(parent).find("td[data-info='title']")).html();
            cart.removeProduct(title);
            parent.remove();
            $('#total-price').html('$' + cart.totalPrice());
            $('#cart-total-products').html(cart.getQuantity() + ' item(s)');
        });

    });


}
export default {cartController}