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
.feature-item {
    width: calc(96% / 3);
    background: #ffffff;
    border-radius: 16px;
    margin: 16px 10px;
    padding: 25px 50px;
    text-align: left;
}

.feature-title {
    font-family: Epilogue;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 25px;
    color: #333333;
}

.feature-content {
    font-family: Epilogue;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: #555555;
}
</style>
>
