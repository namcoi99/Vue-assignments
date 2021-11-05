<template>
    <div class="feature-item">
        <img :src="feature.icon" :alt="feature.title" />
        <h4 class="feature-title">{{ feature.title }}</h4>
        <p class="feature-content">{{ feature.content }}</p>
    </div>
</template>

<script>
export default {
    props: ['feature'],
};
</script>

<style scoped>

</style>>