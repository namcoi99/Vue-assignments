<template>
    <div class="bai12">
        <FilterSection />
        <ProductSection />
    </div>
</template>

<script>
import FilterSection from '@/modules/bai12/components/FilterSection.vue';
import ProductSection from '@/modules/bai12/components/ProductSection.vue';
export default {
    components: {
        FilterSection,
        ProductSection,
    },
};
</script>

<style scoped>
.bai12 {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    margin: 40px 16px;
}
</style>
