<template>
    <div class="product-page">
        <AppHeader />
        <TopNavigation :product="product" />
        <BodyContent :product="product" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import AppHeader from '../layouts/AppHeader.vue';
import BodyContent from '../components/Product/BodyContent.vue';
import TopNavigation from '../components/Product/TopNavigation.vue';

export default defineComponent({
    components: {
        AppHeader,
        BodyContent,
        TopNavigation,
    },
    data() {
        return {
            product: {
                id: 1,
                img: ['product/1-1', 'product/1-2', 'product/1-3'],
                code: 'SKU D5515AI3',
                name: 'MSI MPG Trident 1 ',
                category: 'HP/COMPAQ PCS',
                description:
                    'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
                price: 3000,
                discount: 0.2,
                specs: {
                    CPU: 'N/A',
                    Featured: 'N/A',
                    IOPorts: 'N/A',
                },
                details: [
                    'Intel Core i7-10700F',
                    'Intel H410',
                    'WHITE',
                    'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
                    'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
                    '2 total slots (64GB Max)',
                    '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
                    'Gaming Keyboard GK30 + Gaming Mouse GM11',
                    '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
                    'Intel WGI219Vethernet (10/100/1000M)',
                    'AX200 (WIFI 6)+BT5.1',
                    'PSU 330W',
                    'Fan Cooler',
                ],
                colors: ['#4B4D4F', '#F2E9DC', '#EAE8EB'],
                inStock: true,
                rating: 4,
                reviews: 4,
            },
        };
    },
});
</script>

<style>
* {
    font-family: Poppins;
}

.app-link {
    color: #0156ff;
}

.app-link.contact {
    text-decoration: underline;
    font-weight: 400;
}
</style>
<style lang="scss"></style>
