<template>
    <div class="product-card">
        <img :src="product.image" :alt="product.name" />
        <h4 class="card-title">{{ product.name }}</h4>
        <span class="card-price">{{ product.price }}</span>
        <p class="card-description">{{ product.description }}</p>
    </div>
</template>

<script>
export default {
    props: ['product'],
};
</script>

<style>
.card-title {
}

.card-price {
}

.card-description {
}
</style>
