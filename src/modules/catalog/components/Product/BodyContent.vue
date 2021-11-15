<template>
    <div class="product-content">
        <ContentLeft :product="product" />
        <ContentRight />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';
import { IProduct } from '../../types';
import ContentLeft from '../Product/ContentLeft.vue';
import ContentRight from '../Product/ContentRight.vue';

export default defineComponent({
    props: {
        product: {
            type: Object as PropType<IProduct>,
            required: true,
        },
    },
    components: {
        ContentLeft,
        ContentRight,
    },
    data() {
        return {
            activeColorId: 1,
        };
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
