<template>
    <el-aside class="catalog-filter" width="234px">
        <h3 class="filter-heading">Filters</h3>
        <button class="app-btn clear">Clear Filter</button>
        <SideFilterGroup
            v-for="(values, name, index) in filters"
            :key="index"
            :filterName="name"
            :filterElements="values"
        ></SideFilterGroup>
        <button class="app-btn">Apply Filters (2)</button>
    </el-aside>
</template>

<script lang="ts">
import SideFilterGroup from '@/modules/catalog/components/Catalog/SideFilterGroup.vue';
import { defineComponent } from 'vue';
import { filterModule } from '../../store/filterStore';
export default defineComponent({
    props: {},
    components: {
        SideFilterGroup,
    },
    data() {
        return {
            filters: filterModule.getFilters,
        };
    },
    computed: {},
});
</script>

<style lang="scss" scoped>
.catalog-filter {
    background-color: #f5f7ff;
    padding: 20px 16px;
    .filter-heading {
        text-align: center;
    }
    button {
        width: 100%;
    }
}
</style>
