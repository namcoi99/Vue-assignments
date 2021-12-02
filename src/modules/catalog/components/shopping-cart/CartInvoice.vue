<template>
    <div class="invoice">
        <h3 class="fw-bold">Summary</h3>
        <h4>Estimate Shipping and Tax</h4>
        <span>Enter your destination to get a shipping estimate.</span>
        <h4>Apply Discount Code</h4>
        <hr />
        <ul class="price-list">
            <li class="price-item">
                <div>Subtotal</div>
                <div>${{ subTotal }}</div>
            </li>
            <li class="price-item">
                <div>
                    Shipping
                    <div class="shipping-note mt-2">
                        (Standard Rate - Price may vary depending on the item/destination.
                        TECS Staff will contact you.)
                    </div>
                </div>
                <div>{{ shipping }}</div>
            </li>
            <li class="price-item">
                <div>Tax</div>
                <div>${{ tax }}</div>
            </li>
            <li class="price-item">
                <div>GST (10%)</div>
                <div>${{ gst }}</div>
            </li>
            <li class="price-item">
                <div>Order Total</div>
                <div class="fs-4">${{ orderTotal }}</div>
            </li>
        </ul>
        <button
            class="app-btn w-100"
            :class="{ disabled: !cartLength }"
            :disabled="!cartLength"
            @click="checkout"
        >
            Proceed to Checkout
        </button>

        <el-dialog v-model="modalVisible" width="30%" center>
            <div class="text-center">
                <i class="far fa-check-circle fs-1" style="color: green"></i>
                <div class="fs-3 fw-bold">Thank you!</div>
                <div>Your payment is successfully done!</div>
            </div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="modalVisible = false">
                        Done
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { GST_RATE, SHIPPING_PRICE, TAX_RATE } from '../../constants';
import { cartModule } from '../../store/cartStore';
export default defineComponent({
    data() {
        return {
            shipping: SHIPPING_PRICE,
            modalVisible: false,
        };
    },
    computed: {
        cartLength() {
            return cartModule.getProductsNumber;
        },
        subTotal(): number {
            return cartModule.getTotalPrice;
        },
        tax(): number {
            return (this.subTotal * TAX_RATE) / 100;
        },
        gst(): number {
            return (this.subTotal * GST_RATE) / 100;
        },
        orderTotal(): number {
            return this.shipping + this.tax + this.gst + this.subTotal;
        },
    },
    methods: {
        checkout() {
            this.modalVisible = true;
            cartModule.clearCart();
        },
    },
});
</script>

<style lang="scss" scoped>
.invoice {
    padding: 16px 32px;
    background-color: #f5f7ff;
}
.price-list {
    list-style-type: none;
    font-weight: 600;
    padding: 0;
}
.price-item {
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
}
.shipping-note {
    font-weight: 400;
    font-size: 10px;
    color: #a2a6b0;
}
</style>
