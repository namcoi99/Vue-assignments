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

<script>
import { ArrowRight } from '@element-plus/icons';
export default {
    props: {
        ArrowRight,
    },
};
</script>

<style scoped>
.catalog-breadcrumb {
    margin-top: 20px;
}
</style>
