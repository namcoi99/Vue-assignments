<template>
    <p class="description">{{ product.description }}</p>
    <ul class="color-list">
        <li
            v-for="(color, index) in product.colors"
            class="color-item"
            :class="{ active: index === activeColorId }"
            :key="index"
            @click="activeColorId = index"
        >
            <span class="color-shape" :style="{ backgroundColor: color }"> </span>
        </li>
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
.description {
    font-weight: 300;
    font-size: 18px;
}
.color-list {
    margin-top: 30px;
}
.color-item {
    display: inline-block;
    padding: 2px;
    margin-right: 18px;
    width: 31px;
    height: 31px;
    border-radius: 50%;
}
.color-shape {
    width: 100%;
    height: 100%;
    display: inline-block;
    border-radius: 50%;
}
.color-item:hover,
.color-item.active {
    border: 2px solid #0156ff;
    cursor: pointer;
}
</style>
