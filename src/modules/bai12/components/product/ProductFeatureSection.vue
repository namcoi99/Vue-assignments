<template>
    <div class="feature-section">
        <div class="feature-item">
            <img :src="require('@/assets/images/bai12/lightbulb.svg')" alt="" />
            <h4 class="feature-title">Clear & Usable user flows</h4>
            <p class="feature-description">Let’s boost yout marketplace</p>
        </div>
        <div class="feature-item">
            <img :src="require('@/assets/images/bai12/styling.svg')" alt="" />
            <h4 class="feature-title">Fine & Styled components</h4>
            <p class="feature-description">Speed up with Setproduct templates</p>
        </div>
        <div class="feature-item">
            <img :src="require('@/assets/images/bai12/paint.svg')" alt="" />
            <h4 class="feature-title">Customizable & Reusable</h4>
            <p class="feature-description">Take our UX patterns and rebuild</p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.feature-section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.feature-item {
    flex: 1 30%;
    margin: 1.5%;
    padding: 24px 16px;
    text-align: center;
    background-color: #ededf0;
    border-radius: 8px;
}

.feature-title {
    font-size: 20px;
    font-weight: bold;
}
</style>
