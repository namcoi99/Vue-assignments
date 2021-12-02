<template>
    <div class="cart-content container">
        <h1 class="cart-title">Shopping Cart</h1>
        <div class="row">
            <div class="col-md-8">
                <CartTable />
            </div>
            <div class="col-md">
                <Invoice />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CartTable from './CartTable.vue';
import Invoice from './CartInvoice.vue';
export default defineComponent({
    components: {
        CartTable,
        Invoice,
    },
    data() {
        return {};
    },
});
</script>

<style lang="scss" scoped>
.cart-title {
    font-weight: 600;
}
</style>
