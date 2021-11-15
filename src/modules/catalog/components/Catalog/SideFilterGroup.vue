<template>
    <div class="filter-group">
        <div id="title" class="filter-title" @click="handleShowFilter">
            {{ filterTitle }}
            <i class="el-icon-arrow-down right" :class="{ hidden: filterShow }"></i>
            <i class="el-icon-arrow-up right" :class="{ hidden: !filterShow }"></i>
        </div>

        <!-- Category Filter -->
        <ul
            v-if="filterName === CATEGORY_FILTER"
            class="filter-list"
            :class="{ hidden: !filterShow }"
        >
            <li
                v-for="(element, index) in filterElements"
                :key="index"
                @click="handleFilterSelected(filterTitle, element?.name)"
            >
                {{ element?.name }}
                <span class="right">
                    {{ element?.quantity }}
                </span>
            </li>
        </ul>

        <!-- Price Filter -->
        <ul
            v-if="filterName === PRICE_FILTER"
            class="filter-list"
            :class="{ hidden: !filterShow }"
        >
            <li
                v-for="(element, index) in filterElements"
                :key="index"
                @click="
                    handleFilterSelected(filterTitle, {
                        min: element?.min,
                        max: element?.max || null,
                    })
                "
            >
                ${{ element?.min }}
                {{ element?.max ? `- ${element?.max}` : 'And Above' }}
                <span class="right">
                    {{ element?.quantity }}
                </span>
            </li>
        </ul>

        <!-- Color Filter -->
        <ul
            v-if="filterName === COLOR_FILTER"
            class="filter-list color"
            :class="{ hidden: !filterShow }"
        >
            <li
                class="color-item"
                :class="{ active: element.id === activeColorId }"
                v-for="(element, index) in filterElements"
                :key="index"
                @click="handleFilterSelected(filterTitle, element?.hexCode)"
            >
                <span
                    class="color-shape"
                    :style="{ backgroundColor: element?.hexCode }"
                ></span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CATEGORY_FILTER, COLOR_FILTER, PRICE_FILTER } from '../../constants';
import { filterModule } from '../../store/filterStore';
import { ICategory, IPrice, ISelectedPrice } from '../../types';
export default defineComponent({
    props: {
        filterName: {
            type: [String, Number],
            required: true,
        },
        filterElements: {
            type: Array as PropType<ICategory[] | IPrice[]>,
            required: true,
        },
    },
    data() {
        return {
            CATEGORY_FILTER,
            COLOR_FILTER,
            PRICE_FILTER,
            activeColorId: 1,
            filterShow: true,
        };
    },
    computed: {
        filterTitle() {
            if (this.filterName === CATEGORY_FILTER) {
                return 'Category';
            }
            if (this.filterName === PRICE_FILTER) {
                return 'Price';
            }
            if (this.filterName === COLOR_FILTER) {
                return 'Color';
            }
            return 'Unknown';
        },
    },
    methods: {
        handleShowFilter() {
            this.filterShow = !this.filterShow;
        },
        handleFilterSelected(filterTitle: string, value: string | ISelectedPrice) {
            const lowerCaseTitle = filterTitle.toLowerCase();
            filterModule.selectFilter({ [lowerCaseTitle]: value });
        },
    },
});
</script>

<style lang="scss" scoped>
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
