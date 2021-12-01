<template>
    <tr v-if="item">
        <td class="d-flex mt-3">
            <img class="cart-item-img" :src="imageUrl" alt="img" />
            <div class="mx-3">{{ item.product.description }}</div>
        </td>
        <td>{{ discountPrice }}$</td>
        <td>
            <el-input-number
                v-model="quantity"
                :min="1"
                :max="100"
                size="mini"
                controls-position="right"
                @change="handleQuantityChange"
            />
        </td>
        <td>{{ totalPrice }}</td>
        <td>
            <i
                class="far fa-times-circle delete-cart-icon"
                @click="deleteItemFromCart"
            ></i>
        </td>
    </tr>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { cartModule } from '../../store/cartStore';
import { ICartProduct } from '../../types';
export default defineComponent({
    props: {
        item: {
            type: Object as PropType<ICartProduct>,
            required: true,
        },
    },
    data() {
        return {
            quantity: this.item.quantity,
        };
    },
    computed: {
        cartItems() {
            return cartModule.getShoppingCart;
        },
        imageUrl(): string {
            return require(`@/assets/images/catalog/${this.item?.product.img[0]}.png`);
        },
        discountPrice(): number {
            return this.item.product.price * (1 - this.item.product.discount);
        },
        totalPrice(): number {
            return this.quantity * this.discountPrice;
        },
    },
    methods: {
        handleQuantityChange() {
            cartModule.changeQuantity({
                product: this.item.product,
                quantity: this.quantity,
            });
        },
        deleteItemFromCart() {
            cartModule.deleteItem(this.item.product.id);
        },
    },
});
</script>

<style lang="scss" scoped>
.cart-item-img {
    width: 120px;
    height: 120px;
}
.delete-cart-icon {
    font-size: 20px;
    color: red;
}
.delete-cart-icon:hover {
    cursor: pointer;
}
</style>
