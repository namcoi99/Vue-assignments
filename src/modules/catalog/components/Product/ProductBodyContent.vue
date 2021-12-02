<template>
    <el-skeleton class="mt-3" :rows="10" animated :loading="loading">
        <TopNavigation :product="product" />
        <div v-if="product" class="product-content">
            <ProductContentLeft :product="product" />
            <ContentRight />
        </div>
    </el-skeleton>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { watchEffect } from 'vue';
import { productModule } from '../../store/productStore';
import { IProduct } from '../../types';
import ProductContentLeft from './ProductContentLeft.vue';
import ContentRight from './ProductContentRight.vue';
import TopNavigation from './ProductTopNavigation.vue';

export default defineComponent({
    props: {
        id: {
            type: [Number, String],
            required: true,
        },
    },
    components: {
        ProductContentLeft,
        ContentRight,
        TopNavigation,
    },
    created() {
        watchEffect(async () => {
            this.product = {} as IProduct;
            productModule.SET_LOADING(true);
            this.product = await productModule.getProductById(+this.id);
            productModule.SET_LOADING(false);
        });
    },
    data() {
        return {
            product: {} as IProduct,
        };
    },
    computed: {
        loading() {
            return productModule.getLoading;
        },
    },
});
</script>

<style lang="scss" scoped>
.product-content {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    max-width: 1400px;
}
</style>
