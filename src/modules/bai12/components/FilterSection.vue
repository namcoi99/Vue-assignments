<template>
    <div class="filter-section">
        <div class="filter-list">
            <div class="filter-item">
                <el-select v-model="sortValue" clearable placeholder="Sort By">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </div>
            <div class="filter-item">
                <el-select v-model="conditionValue" clearable placeholder="Condition">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </div>
            <div class="filter-item">
                <el-select
                    v-model="deliveryValue"
                    clearable
                    placeholder="Delivery Options"
                >
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="show-option">
            <button
                class="show-option-btn"
                :class="{ active: showOption === 'showAll' }"
                @click="showOption = 'showAll'"
            >
                Show all
            </button>
            <button
                class="show-option-btn"
                :class="{ active: showOption === 'showAuction' }"
                @click="showOption = 'showAuction'"
            >
                Auction
            </button>
            <button
                class="show-option-btn"
                :class="{ active: showOption === 'showBuyNow' }"
                @click="showOption = 'showBuyNow'"
            >
                Buy now
            </button>
            <button
                class="show-option-btn"
                :class="{ active: showType === 'listType' }"
                @click="showType = 'listType'"
            >
                <img src="@/assets/images/bai12/option-list.svg" alt="" />
            </button>
            <button
                class="show-option-btn"
                :class="{ active: showType === 'cardType' }"
                @click="showType = 'cardType'"
            >
                <img src="@/assets/images/bai12/option-card.svg" alt="" />
            </button>
        </div>
    </div>
    <div class="related-section">
        <span class="related-title">Related</span>
        <button class="related-btn" v-for="(item, index) in related" :key="index">
            {{ item }}
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: [
                {
                    value: 'Option1',
                    label: 'Option1',
                },
                {
                    value: 'Option2',
                    label: 'Option2',
                },
                {
                    value: 'Option3',
                    label: 'Option3',
                },
                {
                    value: 'Option4',
                    label: 'Option4',
                },
                {
                    value: 'Option5',
                    label: 'Option5',
                },
            ],
            sortValue: '',
            conditionValue: '',
            deliveryValue: '',
            related: [
                'worldwide shipping',
                'under $50',
                'kitten',
                'plastic plugs',
                'pucker shoes',
                'vintage typewriter',
            ],
            showOption: '',
            showType: '',
        };
    },
    methods: {},
};
</script>

<style scoped>
.filter-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.filter-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 50%;
}

.filter-item {
    flex: 1 30%;
    margin: 0 1.5%;
}

.show-option {
    max-width: 50%;
}

.show-option-btn {
    background: #ebf2ff;
    border-radius: 4px;
    outline: none;
    border: none;
    padding: 8px;
}

.show-option-btn.active,
.show-option-btn:hover {
    color: #2264d1;
    background-color: #fff;
    font-weight: 500;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 30%);
}

.show-option-btn:nth-child(4) {
    margin-left: 24px;
}

.related-section {
    margin-top: 40px;
}

.related-title {
    color: #19191d;
    font-weight: 500;
    line-height: 143%;
    margin-right: 4px;
}

.related-btn {
    background-color: #ededf0;
    border-radius: 99px;
    outline: none;
    border: none;
    padding: 6px 12px;
}

.related-btn ~ .related-btn {
    margin-left: 8px;
}
</style>
