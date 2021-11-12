<template>
    <el-aside class="catalog-filter" width="234px">
        <div class="filter-heading">
            <h3 class="filter-title">Filters</h3>
            <button class="filter-clear-btn">Clear Filter</button>
        </div>
        <CatalogFilterGroup
            v-for="(group, groupIndex) in filterGroups"
            :key="groupIndex"
            :filterGroup="group"
        >
        </CatalogFilterGroup>
    </el-aside>
</template>

<script>
import CatalogFilterGroup from '@/modules/catalog/components/CatalogFilterGroup.vue';
export default {
    components: {
        CatalogFilterGroup,
    },
    data() {
        return {
            filterGroups: [],
        };
    },
};
</script>

<style scoped>
.catalog-filter {
    background-color: #f5f7ff;
    padding: 20px 16px;
}

.filter-heading {
    text-align: center;
}

.filter-clear-btn {
    color: #a2a6b0;
    border: 2px solid #a2a6b0;
    border-radius: 50px;
    text-align: center;
    width: 100%;
    height: 36px;
    font-weight: 600;
}
</style>
