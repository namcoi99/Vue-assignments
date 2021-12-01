<template>
    <div class="catalog-breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item>Laptops</el-breadcrumb-item>
            <el-breadcrumb-item>Everyday Use Notebooks</el-breadcrumb-item>
            <el-breadcrumb-item>MSI Prestige Series</el-breadcrumb-item>
            <el-breadcrumb-item>MSI WS Series</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script lang="ts">
import { ArrowRight } from '@element-plus/icons';
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        ArrowRight,
    },
});
</script>

<style scoped>
.catalog-breadcrumb {
    margin-top: 20px;
}
</style>
