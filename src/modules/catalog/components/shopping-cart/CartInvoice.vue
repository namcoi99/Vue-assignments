<template>
    <div class="invoice">
        <h3 class="fw-bold">Summary</h3>
        <div class="shipping-tax">
            <h4 class="dropdown-title" @click="handleShowShippingTax">
                Estimate Shipping and Tax
                <i
                    class="el-icon-arrow-down right"
                    :class="{ hidden: shippingTaxVisible }"
                ></i>
                <i
                    class="el-icon-arrow-up right"
                    :class="{ hidden: !shippingTaxVisible }"
                ></i>
            </h4>
            <span>Enter your destination to get a shipping estimate.</span>
            <el-form
                class="address-info"
                :class="{ hidden: !shippingTaxVisible }"
                :model="paymentForm"
                :rules="rules"
            >
                <el-form-item class="address-item" prop="country">
                    <template #label>
                        <label class="address-item-label" for="country">Country</label>
                    </template>
                    <el-select
                        id="country"
                        class="w-100"
                        v-model="paymentForm.country"
                        placeholder="Select your country"
                    >
                        <el-option
                            v-for="item in countries"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="address-item" prop="province">
                    <template #label>
                        <label class="address-item-label" for="province">
                            State/Province
                        </label>
                    </template>
                    <el-input id="province" v-model="paymentForm.province" />
                </el-form-item>
                <el-form-item class="address-item" prop="zipCode">
                    <template #label>
                        <label class="address-item-label" for="zipCode">
                            Zip/Postal Code
                        </label>
                    </template>
                    <el-input id="zipCode" v-model="paymentForm.zipCode" />
                </el-form-item>
                <el-form-item class="address-item" prop="receiveMethod">
                    <template #label>
                        <label class="address-item-label" for="standard">
                            Standard Rate
                        </label>
                    </template>
                    <el-radio
                        v-model="paymentForm.receiveMethod"
                        id="standard"
                        label="standard"
                        class="d-flex text-wrap fw-normal"
                    >
                        Price may vary depending on the item/destination. Shop Staff will
                        contact you. $21.00
                    </el-radio>
                </el-form-item>
                <el-form-item class="address-item" prop="receiveMethod">
                    <template #label>
                        <label class="address-item-label" for="pickup">
                            Pickup from store
                        </label>
                    </template>
                    <el-radio
                        v-model="paymentForm.receiveMethod"
                        id="pickup"
                        label="pickup"
                        class="d-flex text-wrap fw-normal"
                        >1234 Street Adress City Address, 1234 $0.00</el-radio
                    >
                </el-form-item>
            </el-form>
        </div>
        <div class="discount-code mt-3">
            <h4 class="dropdown-title" @click="handleShowDiscountCode">
                Apply Discount Code
                <i
                    class="el-icon-arrow-down right"
                    :class="{ hidden: discountCodeVisible }"
                ></i>
                <i
                    class="el-icon-arrow-up right"
                    :class="{ hidden: !discountCodeVisible }"
                ></i>
            </h4>
            <div class="discount-code-box" :class="{ hidden: !discountCodeVisible }">
                <label class="address-item-label" for="discountCode">
                    Enter discount code
                </label>
                <el-input
                    v-model="discountCode"
                    id="discountCode"
                    placeholder="Enter Discount code"
                />
                <button class="app-btn plain w-100 mt-3">Apply Discount</button>
            </div>
        </div>
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

        <el-dialog v-model="checkoutDoneModalVisible" width="30%" center>
            <div class="text-center">
                <i class="far fa-check-circle fs-1" style="color: green"></i>
                <div class="fs-3 fw-bold">Thank you!</div>
                <div>Your payment is successfully done!</div>
            </div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="checkoutDoneModalVisible = false">
                        Done
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { COUNTRIES, GST_RATE, SHIPPING_PRICE, TAX_RATE } from '../../constants';
import { cartModule } from '../../store/cartStore';
export default defineComponent({
    data() {
        return {
            shipping: this.cartLength ? SHIPPING_PRICE : 0,
            shippingTaxVisible: false,
            discountCodeVisible: false,
            checkoutDoneModalVisible: false,
            countries: COUNTRIES,
            discountCode: '',
            discountCodeValid: false,
            paymentForm: {
                country: '',
                province: '',
                zipCode: '',
                receiveMethod: '',
            },
            rules: {
                country: [
                    {
                        required: true,
                        message: 'Please select your country',
                        trigger: 'change',
                    },
                ],
                province: [
                    {
                        required: true,
                        message: 'Please enter your state/province',
                        trigger: 'blur',
                    },
                    {
                        min: 3,
                        message: 'Length should be at least 3',
                        trigger: 'blur',
                    },
                ],
                zipCode: [
                    {
                        required: true,
                        message: 'Please enter your Zip/Postal Code',
                        trigger: 'blur',
                    },
                ],
                receiveMethod: [
                    {
                        required: true,
                        message: 'Please select receive method',
                        trigger: 'change',
                    },
                ],
            },
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
            this.checkoutDoneModalVisible = true;
            cartModule.clearCart();
        },
        handleShowShippingTax() {
            this.shippingTaxVisible = !this.shippingTaxVisible;
        },
        handleShowDiscountCode() {
            this.discountCodeVisible = !this.discountCodeVisible;
        },
    },
});
</script>

<style lang="scss" scoped>
.invoice {
    padding: 16px 32px;
    background-color: #f5f7ff;
}

.dropdown-title {
    cursor: pointer;
}

.address-info {
    list-style-type: none;
    padding: 0;
}

.address-item {
    display: flex;
    flex-direction: column;
    margin: 24px 0;
}

.address-item-label {
    font-weight: 600;
    float: left;
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
