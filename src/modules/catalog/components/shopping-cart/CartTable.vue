<template>
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col" style="width: 50%">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Qty</th>
                <th scope="col">Subtotal</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <CartRow v-for="(item, index) in cartItems" :key="index" :item="item" />
        </tbody>
    </table>
    <div v-if="!cartItems.length" class="text-center fs-4 mb-3">
        You have no items in shopping cart
        <hr />
    </div>
    <router-link :to="{ name: 'catalog' }">
        <button class="app-btn secondary me-3">Continue Shopping</button>
    </router-link>
    <button class="app-btn dark" @click="clearCart">Clear Shopping Cart</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { cartModule } from '../../store/cartStore';
import CartRow from './CartRow.vue';
export default defineComponent({
    components: {
        CartRow,
    },
    data() {
        return {};
    },
    computed: {
        cartItems() {
            return cartModule.getShoppingCart;
        },
    },
    methods: {
        clearCart() {
            cartModule.clearCart();
        },
    },
});
</script>

<style lang="scss" scoped>
.cart-item-img {
    width: 120px;
    height: 120px;
}
</style>
