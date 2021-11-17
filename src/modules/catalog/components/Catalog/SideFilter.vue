<template>
    <el-aside class="catalog-filter" width="234px">
        <h3 class="filter-heading">Filters</h3>
        <button class="app-btn clear">Clear Filter</button>

        <!-- Category Filter -->
        <div class="filter-group">
            <div id="title" class="filter-title" @click="handleShowFilter">
                Category
                <i class="el-icon-arrow-down right" :class="{ hidden: filterShow }"></i>
                <i class="el-icon-arrow-up right" :class="{ hidden: !filterShow }"></i>
            </div>

            <ul class="filter-list" :class="{ hidden: !filterShow }">
                <li
                    v-for="(element, index) in filters.filterCategories"
                    :class="{ active: isCategorySelected(element.name) }"
                    :key="index"
                    @click="handleCategorySelected(element.name)"
                >
                    {{ element.name }}
                    <span class="right">
                        {{ element.quantity }}
                    </span>
                </li>
            </ul>
        </div>

        <!-- Price Filter -->
        <div class="filter-group">
            <div id="title" class="filter-title" @click="handleShowFilter">
                Price
                <i class="el-icon-arrow-down right" :class="{ hidden: filterShow }"></i>
                <i class="el-icon-arrow-up right" :class="{ hidden: !filterShow }"></i>
            </div>

            <ul class="filter-list" :class="{ hidden: !filterShow }">
                <li
                    v-for="(element, index) in filters.filterPrices"
                    :class="{
                        active: isPriceSelected({ min: element.min, max: element.max }),
                    }"
                    :key="index"
                    @click="
                        handlePriceSelected({
                            min: element.min,
                            max: element.max,
                        })
                    "
                >
                    {{ showPriceDescription(element) }}
                    <span class="right">
                        {{ element.quantity }}
                    </span>
                </li>
            </ul>
        </div>

        <!-- Color Filter -->
        <div class="filter-group">
            <div id="title" class="filter-title" @click="handleShowFilter">
                Color
                <i class="el-icon-arrow-down right" :class="{ hidden: filterShow }"></i>
                <i class="el-icon-arrow-up right" :class="{ hidden: !filterShow }"></i>
            </div>

            <ul class="filter-list color" :class="{ hidden: !filterShow }">
                <li
                    class="color-item"
                    :class="{ active: isColorSelected(element?.hexCode) }"
                    v-for="(element, index) in filters.filterColors"
                    :key="index"
                    @click="handleColorSelected(element?.hexCode)"
                >
                    <span
                        class="color-shape"
                        :style="{ backgroundColor: element?.hexCode }"
                    ></span>
                </li>
            </ul>
        </div>
        <button class="app-btn">Apply Filters ({{ filtersCount }})</button>
    </el-aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { filterModule } from '../../store/filterStore';
import { IPrice, ISelectedPrice } from '../../types';
const MAX_VALUE = 100000;
export default defineComponent({
    props: {},
    data() {
        return {
            filters: filterModule.getFilters,
            filterShow: true,
            filtersSelected: filterModule.getFiltersSelected,
        };
    },
    computed: {
        filtersCount(): number {
            const categoriesCount = this.filtersSelected.categories.length;
            const pricesCount = this.filtersSelected.prices.length;
            const colorsCount = this.filtersSelected.colors.length;
            return categoriesCount + pricesCount + colorsCount;
        },
    },
    methods: {
        handleShowFilter() {
            this.filterShow = !this.filterShow;
        },
        handleCategorySelected(category: string) {
            filterModule.selectCategory(category);
        },
        handlePriceSelected(price: ISelectedPrice) {
            filterModule.selectPrice(price);
        },
        handleColorSelected(color: string) {
            filterModule.selectColor(color);
        },
        isCategorySelected(category: string) {
            return this.filtersSelected.categories.indexOf(category) > -1;
        },
        isPriceSelected(price: ISelectedPrice) {
            return (
                this.filtersSelected.prices.findIndex(
                    (priceSelected) =>
                        priceSelected.max === price.max &&
                        priceSelected.min === price.min,
                ) > -1
            );
        },
        isColorSelected(color: string) {
            return this.filtersSelected.colors.indexOf(color) > -1;
        },
        showPriceDescription(element: IPrice) {
            return `$${element.min} ${
                element.max < MAX_VALUE ? `- ${element.max}` : 'And Above'
            }`;
        },
    },
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
.filter-group {
    margin-top: 20px;
    line-height: 27px;
    .filter-title {
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
    }
    .filter-list {
        padding: 0;
        list-style-type: none;
        li {
            cursor: pointer;
        }
        li:hover,
        li.active {
            font-weight: 600;
        }
        .color-item {
            display: inline-block;
            padding: 2px;
            margin-right: 7px;
            width: 27px;
            height: 27px;
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
    }
    .filter-list.color {
        display: flex;
        align-items: center;
    }
}
</style>
