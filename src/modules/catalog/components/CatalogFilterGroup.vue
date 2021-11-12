<template>
    <div class="filter-group">
        <div class="filter-title">{{ filterGroup.name }}</div>
        <ul
            v-for="(option, optionIndex) in filterGroup.options"
            :key="optionIndex"
            class="filter-option"
        >
            <li>{{ option }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['filterGroup'],
};
</script>

<style scoped>
.filter-title {
    font-size: 16px;
    font-weight: bold;
}
</style>
