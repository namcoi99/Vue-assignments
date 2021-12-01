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
    updateCart(cartProduct: ICartProduct) {
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
    updateQuantity(cartProduct: ICartProduct) {
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
    deleteItem(cartProductId: number) {
        this.shoppingCart = this.shoppingCart.filter(
            (item) => item.product.id !== cartProductId,
        );
    }

    @Mutation
    clearCart() {
        this.shoppingCart = [];
    }

    @Action({ commit: 'updateCart' })
    addToCart(cartProduct: ICartProduct) {
        return cartProduct;
    }

    @Action({ commit: 'deleteItem' })
    deleteItemFromCart(cartProductId: number) {
        return cartProductId;
    }

    @Action({ commit: 'updateQuantity' })
    changeQuantity(cartProduct: ICartProduct) {
        return cartProduct;
    }
}

export const cartModule = getModule(Cart);
