<template>
    <div class="product-card">
        <img :src="product.image" :alt="product.name" />
        <h4 class="product-card-title">{{ product.name }}</h4>
        <span class="product-card-price">${{ product.price }}</span>
        <p class="product-card-description">{{ product.description }}</p>
        <div class="product-card-footer">
            <div class="product-card-rating">
                <star-rating
                    :star-size="20"
                    :round-start-rating="false"
                    :read-only="true"
                    :rating="product.rating"
                    active-color="#FB8200"
                >
                </star-rating>
            </div>
            <button class="product-card-btn">
                <img :src="require('@/assets/images/bai12/heart.svg')" alt="heart" />
                Watch
            </button>
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating';
export default {
    props: ['product'],
    components: {
        StarRating,
    },
    data() {
        return {};
    },
};
</script>

<style scoped>
.product-card {
    flex-basis: 21%;
    flex-grow: 1;
    padding: 2%;
    display: flex;
    flex-direction: column;
}

.product-card-title {
    color: #19191d;
    font-size: 16px;
    height: 74px;
}

.product-card-price {
    font-weight: bold;
    font-size: 24px;
    color: rgba(0, 0, 0, 0.87);
}

.product-card-description {
    color: #787885;
    flex: 1;
}

.product-card-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.product-card-btn {
    background: #ffffff;
    border: 1px solid #9dc2ff;
    border-radius: 4px;
    color: rgb(34, 100, 209);
    padding: 4px 12px;
    margin-right: 16px;
}

.product-card-btn:hover {
    background-color: rgba(34, 100, 209, 0.8);
    color: #fff;
}
</style>
