<template>
    <div class="product-top">
        <div class="item-count">
            Items {{ fromProduct }}-{{ toProduct }} of {{ totalProductsCount }}
        </div>
        <div class="product-show-option">
            <CatalogTopFilterSelect />
            <button
                class="show-option-btn"
                :class="{ active: viewOption === VIEW_CARD_OPTION }"
                @click="handleViewOption('card')"
            >
                <i class="el-icon-s-grid"></i>
            </button>
            <button
                class="show-option-btn"
                :class="{ active: viewOption === VIEW_DETAIL_OPTION }"
                @click="handleViewOption('detail')"
            >
                <i class="el-icon-s-unfold"></i>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
    VIEW_DETAIL_OPTION,
    VIEW_CARD_OPTION,
    DEFAULT_PAGE_LIMIT,
} from '../../constants';
import { filterModule } from '@/modules/catalog/store/filterStore';
import CatalogTopFilterSelect from './CatalogTopFilterSelect.vue';
import { productModule } from '../../store/productStore';

export default defineComponent({
    components: {
        CatalogTopFilterSelect,
    },
    data() {
        return {
            VIEW_DETAIL_OPTION,
            VIEW_CARD_OPTION,
        };
    },
    computed: {
        viewOption() {
            return filterModule.getOptions.view;
        },
        totalProductsCount() {
            return productModule.getProductsCount;
        },
        fromProduct() {
            return (filterModule.getCurrentPage - 1) * DEFAULT_PAGE_LIMIT + 1;
        },
        toProduct() {
            return Math.min(
                filterModule.getCurrentPage * DEFAULT_PAGE_LIMIT,
                productModule.getProductsCount,
            );
        },
    },
    methods: {
        handleViewOption(selected: string) {
            filterModule.selectViewOption(selected);
        },
    },
});
</script>

<style lang="scss" scoped>
.product-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item-count {
        color: #a2a6b0;
        font-size: 13px;
        line-height: 50px;
    }
    .product-show-option {
        position: relative;
        display: flex;
        align-items: stretch;

        .show-option-btn {
            padding: 0;
            margin-right: 9px;
            font-size: 30px;
            color: #e5e5e5;
            background-color: #fff;
            border: none;
        }

        .show-option-btn i {
            font-size: 30px;
        }
        .show-option-btn.active {
            color: #000;
        }
    }
}
</style>
