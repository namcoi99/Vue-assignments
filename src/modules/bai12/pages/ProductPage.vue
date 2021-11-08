<template>
    <div class="bai12">
        <FilterSection />
        <ProductSection />
        <FeatureSection />
    </div>
</template>

<script>
import FilterSection from '@/modules/bai12/components/product/ProductFilterSection.vue';
import ProductSection from '@/modules/bai12/components/product/ProductSection.vue';
import FeatureSection from '@/modules/bai12/components/product/ProductFeatureSection.vue';
export default {
    components: {
        FilterSection,
        ProductSection,
        FeatureSection,
    },
};
</script>

<style scoped>
.bai12 {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    padding: 16px;
    margin-top: 40px;
    box-shadow: 0px 1px 2px rgba(58, 58, 68, 0.24), 0px 2px 4px rgba(90, 91, 106, 0.24);
    border-radius: 8px;
}
</style>
