<template>
    <div class="bai12">
        <FilterSection />
        <ProductSection />
        <FeatureSection />
    </div>
</template>

<script>
import FilterSection from '@/modules/bai12/components/FilterSection.vue';
import ProductSection from '@/modules/bai12/components/ProductSection.vue';
import FeatureSection from '@/modules/bai12/components/FeatureSection.vue';
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
    margin: 40px 16px;
}
</style>
