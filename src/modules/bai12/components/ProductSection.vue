<template>
    <div class="product-section">
        <ProductCard
            v-for="(product, index) in products"
            :key="index"
            :product="product"
        />
    </div>
</template>

<script>
import ProductCard from '@/modules/bai12/components/ProductCard.vue';
export default {
    components: {
        ProductCard,
    },
    data() {
        return {
            products: [
                {
                    image: require('../../../assets/images/bai12/Image-1.png'),
                    name: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
                    price: 49.5,
                    description: 'Eligible for Shipping To Mars or somewhere else',
                    discount: 0,
                    rating: 4,
                },
                {
                    image: require('@/assets/images/bai12/Image-2.png'),
                    name: 'Lee Pucker design. Leather botinki for handsome designers. Free shipping.',
                    price: 128.99,
                    description: '1258 bids, 359 watchers $5.95 for shipping',
                    discount: 0,
                    rating: 4,
                },
                {
                    image: require('@/assets/images/bai12/Image-3.png'),
                    name: 'Timesaving kitten to save months on development. Playful, cute, cheap!',
                    price: 128.99,
                    description: 'Eligible for nothing :(',
                    discount: 0,
                    rating: 4,
                },
                {
                    image: require('@/assets/images/bai12/Image-4.png'),
                    name: 'Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!',
                    price: 128.99,
                    description:
                        'Wordwide shitting available Buyers protection possible!',
                    discount: 0,
                    rating: 4,
                },
                {
                    image: require('@/assets/images/bai12/Image-5.png'),
                    name: 'Creativity stimulating lotion. Drink every morning to generate better ideas!',
                    price: 128.99,
                    description:
                        'Wordwide shifting available Buyers protection possible!',
                    discount: 0,
                    rating: 4,
                },
                {
                    image: require('@/assets/images/bai12/Image-6.png'),
                    name: 'Prototyping items to create a lot if useless things...',
                    price: 128.99,
                    description: 'Showcasing onHovered state',
                    discount: 0,
                    rating: 4,
                },
                {
                    image: require('@/assets/images/bai12/Image-7.png'),
                    name: 'John Von Ebalkin SPRING ',
                    price: 13.95,
                    description: '1258 bids, 359 watchers $5.95 for shipping',
                    discount: 0,
                    rating: 4,
                },
                {
                    image: require('@/assets/images/bai12/Image-8.png'),
                    name: 'Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY',
                    price: 13.95,
                    description: 'Eligible for Shipping To Mars or somewhere else',
                    discount: 0,
                    rating: 4,
                },
                {
                    image: require('@/assets/images/bai12/Image-9.png'),
                    name: 'Professional teadrinking set for every designer and developer',
                    price: 13.95,
                    description: 'Eligible for nothing :(',
                    discount: 0,
                    rating: 4,
                },
                {
                    image: require('@/assets/images/bai12/Image-10.png'),
                    name: 'One string Bonsai description',
                    price: 128.99,
                    description:
                        'Wordwide shifting available Buyers protection possible!',
                    discount: 0,
                    rating: 4,
                },
                {
                    image: require('@/assets/images/bai12/Image-11.png'),
                    name: 'Simply best item in town to shine bright with your Nine Inch Nails',
                    price: 128.99,
                    description: 'Eligible for Shipping To Mars or somewhere else',
                    discount: 0,
                    rating: 4,
                },
                {
                    image: require('@/assets/images/bai12/Image-12.png'),
                    name: 'KISTOCHKI & KRASIBO. Top cosmetics brand from Chelyabinsk is here!',
                    price: 128.99,
                    description: '1258 bids, 359 watchers $5.95 for shipping',
                    discount: 0,
                    rating: 4,
                },
            ],
        };
    },
};
</script>

<style></style>
