<template>
    <div class="specs-table">
        <el-row class="spec" v-for="(value, name, index) in product.specs" :key="index">
            <el-col :span="14">
                {{ name }}
            </el-col>
            <el-col :span="10">
                {{ value }}
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IProduct } from '../../types';

export default defineComponent({
    props: {
        product: {
            type: Object as PropType<IProduct>,
            required: true,
        },
    },
});
</script>

<style lang="scss" scoped>
.specs-table {
    border: 1px solid #cacdd8;
    width: 400px;
}
.spec {
    padding: 6px 15px;
}
.spec:nth-child(2n) {
    background-color: #f5f7ff;
}
.spec:nth-child(2n + 1) {
    background-color: #fff;
}
</style>
