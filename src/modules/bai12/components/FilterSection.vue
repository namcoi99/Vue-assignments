<template>
    <div class="filter-section">
        <div class="sort-by">
            <el-select v-model="value" placeholder="Select">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>
        </div>
        <div class="sort-by">
            <el-select v-model="value" placeholder="Select">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>
        </div>
        <div class="sort-by">
            <el-select v-model="value" placeholder="Select">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>
        </div>
        <div class="show-option">
            <button class="show-option-btn">Show all</button>
            <button class="show-option-btn">Auction</button>
            <button class="show-option-btn">Buy now</button>
            <button class="show-option-btn">
                <img src="@/assets/images/bai12/option-list.svg" alt="" />
            </button>
            <button class="show-option-btn">
                <img src="@/assets/images/bai12/option-card.svg" alt="" />
            </button>
        </div>
    </div>
    <div class="related-section">
        <button v-for="(item, index) in related" :key="index">{{ item }}</button>
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
            related: [
                'worldwide shipping',
                'under $50',
                'kitten',
                'plastic plugs',
                'pucker shoes',
                'vintage typewriter',
            ],
        };
    },
};
</script>

<style></style>
