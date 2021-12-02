import { ICartProduct } from './../types';

import { getModule, VuexModule, Mutation, Action, Module } from 'vuex-module-decorators';
import store from '@/store';

@Module({ dynamic: true, namespaced: true, store, name: 'cart' })
class Cart extends VuexModule {
    shoppingCart: ICartProduct[] = [];

    get getShoppingCart() {
        return this.shoppingCart;
    }

    get getProductsNumber() {
        let totalCartItems = 0;
        this.shoppingCart.forEach((item) => (totalCartItems += item.quantity));
        return totalCartItems;
    }

    get getTotalPrice() {
        let total = 0;
        this.shoppingCart.forEach(
            (item) =>
                (total +=
                    item.quantity * item.product.price * (1 - item.product.discount)),
        );
        return total;
    }

    @Mutation
    UPDATE_CART(cartProduct: ICartProduct) {
        const cartProductExist = this.shoppingCart.find(
            (item) => item.product.id === cartProduct.product.id,
        );
        if (cartProductExist) {
            cartProductExist.quantity += cartProduct.quantity;
        } else {
            this.shoppingCart.push(cartProduct);
        }
    }

    @Mutation
    UPDATE_QUANTITY(cartProduct: ICartProduct) {
        const cartProductExist = this.shoppingCart.find(
            (item) => item.product.id === cartProduct.product.id,
        );
        if (cartProductExist) {
            cartProductExist.quantity = cartProduct.quantity;
        } else {
            this.shoppingCart.push(cartProduct);
        }
    }

    @Mutation
    DELETE_ITEM_FROM_CART(cartProductId: number) {
        this.shoppingCart = this.shoppingCart.filter(
            (item) => item.product.id !== cartProductId,
        );
    }

    @Mutation
    clearCart() {
        this.shoppingCart = [];
    }

    @Action({ commit: 'UPDATE_CART' })
    addToCart(cartProduct: ICartProduct) {
        return cartProduct;
    }

    @Action({ commit: 'DELETE_ITEM_FROM_CART' })
    deleteItemFromCart(cartProductId: number) {
        return cartProductId;
    }

    @Action({ commit: 'UPDATE_QUANTITY' })
    changeQuantity(cartProduct: ICartProduct) {
        return cartProduct;
    }
}

export const cartModule = getModule(Cart);
