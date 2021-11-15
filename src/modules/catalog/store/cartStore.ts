import { IProduct } from './../types';

import { getModule, VuexModule, Mutation, Action, Module } from 'vuex-module-decorators';
import store from '@/store';

@Module({ dynamic: true, namespaced: true, store, name: 'cart' })
class Cart extends VuexModule {
    shoppingCart: IProduct[] = [];

    get getShoppingCart() {
        return this.shoppingCart;
    }

    get getProductsNumber() {
        return this.shoppingCart.length;
    }

    @Mutation
    updateCart(product: IProduct) {
        this.shoppingCart.push(product);
    }

    @Action({ commit: 'updateCart' })
    addToCart(product: IProduct) {
        return product;
    }
}

export const cartModule = getModule(Cart);
