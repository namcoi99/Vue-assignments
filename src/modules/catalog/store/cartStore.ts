import { notify } from './../util';
import { ICartProduct, INotifyType } from './../types';

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
        if (this.shoppingCart.length) {
            this.shoppingCart = [];
            notify('Success', 'Clear cart successful', INotifyType.SUCCESS);
        } else {
            notify('Error', 'Your cart is empty', INotifyType.ERROR);
        }
    }

    @Action({ commit: 'UPDATE_CART' })
    addToCart(cartProduct: ICartProduct) {
        notify('Success', 'Product has been added to cart', INotifyType.SUCCESS);
        return cartProduct;
    }

    @Action({ commit: 'DELETE_ITEM_FROM_CART' })
    deleteItemFromCart(cartProductId: number) {
        notify(
            'Success',
            `Product with id ${cartProductId} has been deleted from cart`,
            INotifyType.SUCCESS,
        );
        return cartProductId;
    }

    @Action({ commit: 'UPDATE_QUANTITY' })
    changeQuantity(cartProduct: ICartProduct) {
        return cartProduct;
    }
}

export const cartModule = getModule(Cart);
