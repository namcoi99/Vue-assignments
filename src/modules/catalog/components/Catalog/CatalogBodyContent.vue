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
                    <button class="selected-category fw-bold" @click="clearFilter">
                        Clear All
                    </button>
                </div>
                <el-skeleton style="width: 240px" :loading="loading" animated>
                    <template #template>
                        <el-skeleton-item
                            variant="image"
                            style="width: 240px; height: 240px"
                        />
                        <div style="padding: 14px">
                            <el-skeleton-item variant="h3" style="width: 50%" />
                            <div
                                style="
                                    display: flex;
                                    align-items: center;
                                    justify-items: space-between;
                                    margin-top: 16px;
                                    height: 16px;
                                "
                            >
                                <el-skeleton-item
                                    variant="text"
                                    style="margin-right: 16px"
                                />
                                <el-skeleton-item variant="text" style="width: 30%" />
                            </div>
                        </div>
                    </template>
                    <!-- FIXME: bug when using pagination with vuex -->
                    <template #default>
                        <div>
                            <el-pagination
                                :page-size="perPage"
                                v-model:currentPage="currentPage"
                                layout="prev, pager, next"
                                :total="+total"
                            >
                            </el-pagination>
                        </div>
                        <ProductCard
                            v-for="product in filteredProducts"
                            :key="product.id"
                            :product="product"
                        />
                    </template>
                </el-skeleton>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import Breadcrumb from './Breadcrumb.vue';
import SideFilter from './CatalogSideFilter.vue';
import TopFilter from './CatalogTopFilter.vue';
import ProductCard from './CatalogProductCard.vue';
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
            currentPage: filterModule.getCurrentPage || 1,
        };
    },
    created() {
        watchEffect(async () => {
            productModule.SET_LOADING(true);
            await productModule.getProducts({
                limit: this.perPage,
                page: this.currentPage,
            });
            productModule.SET_LOADING(false);
        });
    },
    computed: {
        loading() {
            return productModule.getLoading;
        },
        total() {
            return productModule.getProductsCount;
        },
        perPage() {
            return filterModule.getOptions.page;
            // get() {
            // },
            // set(value) {},
        },
        // currentPage: {
        //     get() {
        //         return filterModule.getCurrentPage;
        //     },
        //     set(value) {
        //         filterModule.selectPage(value);
        //     },
        // },
        categoriesSelected() {
            return filterModule.getFiltersSelected.categories;
        },
        selectedFilters() {
            return filterModule.getFiltersSelected;
        },
        filteredProducts(): IProduct[] {
            const products = productModule.getAllProducts;
            let filteredProducts: IProduct[] = [];

            const sortOption = filterModule.getOptions.sort;

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
        clearFilter() {
            filterModule.CLEAR_FILTER();
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
