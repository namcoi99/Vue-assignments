<template>
    <div class="catalog-content">
        <img class="catalog-hero-banner" :src="heroBanner" alt="hero banner" />
        <Breadcrumb />
        <h1 class="catalog-title">MSI PS Series(20)</h1>
        <el-row>
            <el-col :span="4">
                <SideFilter />
            </el-col>
            <el-col class="product-section" :span="20">
                <TopFilter />
                <ProductCard
                    v-for="product in filteredProducts"
                    :key="product.id"
                    :product="product"
                />
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import Breadcrumb from './Breadcrumb.vue';
import SideFilter from './SideFilter.vue';
import TopFilter from './TopFilter.vue';
import ProductCard from './ProductCard.vue';
import { defineComponent } from 'vue';
import { productModule } from '../../store/productStore';
import { filterModule } from '../../store/filterStore';
import {
    NAME_SORT_OPTION,
    POSITION_SORT_OPTION,
    PRICE_ASC_SORT_OPTION,
    PRICE_DSC_SORT_OPTION,
} from '../../constants';
import { IProduct } from '../../types';

export default defineComponent({
    components: {
        Breadcrumb,
        SideFilter,
        TopFilter,
        ProductCard,
    },
    data() {
        return {
            heroBanner: require('@/assets/images/catalog/hero-banner.png'),
        };
    },
    computed: {
        selectedFilters() {
            return filterModule.getFiltersSelected;
        },
        filteredProducts(): IProduct[] {
            const products = productModule.getAllProducts;
            let filteredProducts: IProduct[] = [];

            const sortOption = filterModule.getSortOption;
            // const pageOption = filterModule.getPageOption;

            if (sortOption === POSITION_SORT_OPTION) {
                filteredProducts = products.sort((a, b) => a.id - b.id);
            }
            if (sortOption === PRICE_ASC_SORT_OPTION) {
                filteredProducts = products.sort(
                    (a, b) =>
                        this.discountPrice(a.price, a.discount) -
                        this.discountPrice(b.price, b.discount),
                );
            }
            if (sortOption === PRICE_DSC_SORT_OPTION) {
                filteredProducts = products.sort(
                    (a, b) =>
                        this.discountPrice(b.price, b.discount) -
                        this.discountPrice(a.price, a.discount),
                );
            }
            if (sortOption === NAME_SORT_OPTION) {
                filteredProducts = products.sort((a, b) => a.name.localeCompare(b.name));
            }
            const filtersSelected = filterModule.getFiltersSelected;
            return filteredProducts.filter(
                (product) =>
                    filtersSelected.categories.includes(product.category) ||
                    product.colors.some((color) =>
                        filtersSelected.colors.includes(color),
                    ),
            );
        },
    },
    methods: {
        discountPrice(price: number, discount: number) {
            return price * (1 - discount);
        },
    },
});
</script>

<style scoped>
.catalog-content {
    margin-right: auto;
    margin-left: auto;
    max-width: 1400px;
}

.catalog-hero-banner {
    width: 100%;
}
.product-section {
    padding-left: 6px;
}
</style>
