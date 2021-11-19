<template>
    <div class="catalog-content">
        perPage: {{ perPage }}; total: {{ totalProducts }}; currentPage :
        {{ page }}
        <img class="catalog-hero-banner" :src="heroBanner" alt="hero banner" />
        <Breadcrumb />
        <h1 class="catalog-title">MSI PS Series(20)</h1>
        <el-row>
            <el-col :span="4">
                <SideFilter />
            </el-col>
            <el-col class="product-section" :span="20">
                <TopFilter />
                <div v-if="categoriesSelected.length !== 0" class="selected-categories">
                    <div
                        v-for="(category, index) in categoriesSelected"
                        class="selected-category fw-bold"
                        :key="index"
                    >
                        {{ category }}
                        <span class="fw-light">(24)</span>
                        <button class="clear-category-btn">X</button>
                    </div>
                    <button class="selected-category fw-bold">Clear All</button>
                </div>
                <ProductCard
                    v-for="product in filteredProducts"
                    :key="product.id"
                    :product="product"
                />
                <el-col :span="24">
                    <el-pagination
                        v-model:page-size="perPage"
                        v-model:current-page="page"
                        layout="prev, pager, next"
                        :total="6"
                    >
                    </el-pagination>
                </el-col>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import Breadcrumb from './Breadcrumb.vue';
import SideFilter from './SideFilter.vue';
import TopFilter from './TopFilter.vue';
import ProductCard from './ProductCard.vue';
import { defineComponent, watchEffect } from 'vue';
import { productModule } from '../../store/productStore';
import { filterModule } from '../../store/filterStore';
import {
    NAME_SORT_OPTION,
    POSITION_SORT_OPTION,
    PRICE_ASC_SORT_OPTION,
    PRICE_DSC_SORT_OPTION,
} from '../../constants';
import { IProduct, ISelectedPrice } from '../../types';

// FIXME: hard code total products in pagination + conflict with filtering
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
            perPage: filterModule.getPageOption,
            page: filterModule.getCurrentPage,
            total: productModule.getProductsCount,
        };
    },
    created() {
        watchEffect(() => {
            productModule.getProducts({
                limit: this.perPage,
                page: this.page,
            });
        });
    },
    computed: {
        categoriesSelected() {
            return filterModule.getFiltersSelected.categories;
        },
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
            if (filtersSelected.categories.length !== 0) {
                filteredProducts = filteredProducts.filter((product) =>
                    filtersSelected.categories.includes(product.category),
                );
            }
            if (filtersSelected.colors.length !== 0) {
                filteredProducts = filteredProducts.filter((product) =>
                    product.colors.some((color) =>
                        filtersSelected.colors.includes(color),
                    ),
                );
            }
            if (filtersSelected.prices.length !== 0) {
                const min = this.getMinFilterPrice(filtersSelected.prices);
                const max = this.getMaxFilterPrice(filtersSelected.prices);
                filteredProducts = filteredProducts.filter(
                    (product) => product.price >= min && product.price <= max,
                );
            }
            return filteredProducts;
        },
    },
    methods: {
        discountPrice(price: number, discount: number) {
            return price * (1 - discount);
        },
        getMinFilterPrice(prices: ISelectedPrice[]) {
            return prices.reduce((previousElement, currentElement) =>
                previousElement.min < currentElement.min
                    ? previousElement
                    : currentElement,
            ).min;
        },
        getMaxFilterPrice(prices: ISelectedPrice[]) {
            return prices.reduce((previousElement, currentElement) =>
                previousElement.min > currentElement.min
                    ? previousElement
                    : currentElement,
            ).max;
        },
    },
});
</script>

<style lang="scss" scoped>
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
    .selected-categories {
        display: flex;
        justify-content: flex-start;
        font-size: 13px;
        .selected-category {
            display: flex;
            align-items: center;
            padding: 0 17px;
            height: 38px;
            background-color: #fff;
            border: 1px solid #cacdd8;
            border-radius: 2px;
        }
        .selected-category ~ .selected-category {
            margin-left: 6px;
        }
    }
}
.clear-category-btn {
    margin-left: 4px;
    width: 20px;
    height: 20px;
    color: #fff;
    background-color: #c94d3f;
    outline: none;
    border: none;
    border-radius: 50%;
}
</style>
