<template>
    <div class="selection-box">
        <label class="selection-label" for="sort-option">Sort By:</label>
        <select
            class="selection_box__inner"
            id="sort-option"
            v-model="sortValue"
            @change="handleSortOption(sortValue)"
        >
            <option
                v-for="item in sortOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            ></option>
        </select>
    </div>
    <div class="selection-box">
        <label class="selection-label fw-bold" for="page-option">Show:</label>
        <select
            class="selection_box__inner"
            id="page-option"
            v-model.number="pageValue"
            @change="handlePageOption(pageValue)"
        >
            <option
                v-for="item in pageOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            ></option>
        </select>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
    FIVE_PER_PAGE_OPTION,
    NAME_SORT_OPTION,
    POSITION_SORT_OPTION,
    PRICE_ASC_SORT_OPTION,
    PRICE_DSC_SORT_OPTION,
    TEN_PER_PAGE_OPTION,
    THIRTYFIVE_PER_PAGE_OPTION,
    TWENTY_PER_PAGE_OPTION,
} from '../../constants';
import { filterModule } from '../../store/filterStore';

export default defineComponent({
    data() {
        return {
            sortOptions: [
                {
                    value: POSITION_SORT_OPTION,
                    label: POSITION_SORT_OPTION,
                },
                {
                    value: PRICE_ASC_SORT_OPTION,
                    label: PRICE_ASC_SORT_OPTION,
                },
                {
                    value: PRICE_DSC_SORT_OPTION,
                    label: PRICE_DSC_SORT_OPTION,
                },
                {
                    value: NAME_SORT_OPTION,
                    label: NAME_SORT_OPTION,
                },
            ],
            pageOptions: [
                {
                    value: FIVE_PER_PAGE_OPTION,
                    label: `${FIVE_PER_PAGE_OPTION} per page`,
                },
                {
                    value: TEN_PER_PAGE_OPTION,
                    label: `${TEN_PER_PAGE_OPTION} per page`,
                },
                {
                    value: TWENTY_PER_PAGE_OPTION,
                    label: `${TWENTY_PER_PAGE_OPTION} per page`,
                },
                {
                    value: THIRTYFIVE_PER_PAGE_OPTION,
                    label: `${THIRTYFIVE_PER_PAGE_OPTION} per page`,
                },
            ],
            sortValue: filterModule.getSortOption,
            pageValue: filterModule.getPageOption,
        };
    },
    computed: {},
    methods: {
        handleSortOption(value: string) {
            filterModule.changeSortOption(value);
        },
        handlePageOption(value: number) {
            filterModule.changePageOption(value);
        },
    },
});
</script>

<style lang="scss" scoped>
.selection-box {
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 12px;
    width: 176px;
    border: 2px solid #cacdd8;
    border-radius: 2px;
    .selection-label {
        position: absolute;
        left: 8%;
        align-self: center;
        color: #a2a6b0;
        pointer-events: none;
    }
    .selection_box__inner {
        margin-left: 64px;
        font-weight: 600;
        width: 100%;
        height: 100%;
        border: none;
    }
}
</style>
