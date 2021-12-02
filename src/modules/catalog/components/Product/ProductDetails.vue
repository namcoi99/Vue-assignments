<template>
    <ul class="details-list">
        <li v-for="(detail, index) in product.details" :key="index">{{ detail }}</li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IProduct } from '../../types';

export default defineComponent({
    props: {
        product: {
            type: Object as PropType<IProduct>,
            required: true,
        },
    },
});
</script>

<style lang="scss" scoped>
.details-list {
    font-size: 14px;
}
</style>
