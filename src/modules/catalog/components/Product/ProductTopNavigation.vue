<template>
    <div v-if="product" class="wrapper">
        <div class="top-nav">
            <div class="top-nav-list">
                <button
                    v-for="(page, index) in pages"
                    class="top-nav-item"
                    :class="{ active: currentPage === page.name }"
                    :key="index"
                    @click="currentPage = page.name"
                >
                    <router-link :to="{ name: page.link }">
                        {{ page.name }}
                    </router-link>
                </button>
            </div>
            <div class="cart-addition">
                On Sale from
                <span class="price"> ${{ discountPrice }}</span>
                <div class="input-number">
                    {{ count }}
                    <div class="btn-group">
                        <button @click="increase()" class="input-number-btn">
                            <i class="el-icon-arrow-up"></i>
                        </button>
                        <button @click="decrease()" class="input-number-btn">
                            <i class="el-icon-arrow-down"></i>
                        </button>
                    </div>
                </div>

                <!-- <button class="app-btn add-to-cart" @click="addToCart">
                    Add to Cart
                </button> -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IProduct } from '../../types';
const MIN_VALUE = 1;
const MAX_VALUE = 100;

export default defineComponent({
    props: {
        product: {
            type: Object as PropType<IProduct>,
            required: true,
        },
    },
    data() {
        return {
            pages: [
                {
                    name: 'About Product',
                    link: 'productAbout',
                },
                {
                    name: 'Details',
                    link: 'productDetails',
                },
                {
                    name: 'Specs',
                    link: 'productSpecs',
                },
            ],
            currentPage: 'About Product',
            count: 1,
        };
    },
    computed: {
        discountPrice(): number {
            return this.product.price - this.product.price * this.product.discount;
        },
    },
    methods: {
        increase() {
            if (this.count < MAX_VALUE) {
                this.count++;
            }
        },
        decrease() {
            if (this.count > MIN_VALUE) {
                this.count--;
            }
        },
        addToCart() {
            // cartModule.addToCart({this.product, quantity: 1});
        },
    },
});
</script>

<style lang="scss">
.wrapper {
    border-bottom: 1px solid #cacdd8;
}
.top-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    height: 100px;
    max-width: 1400px;
}
.top-nav-item {
    padding: 0;
    font-size: 14px;
    border: none;
    outline: none;
    background-color: #fff;
}

.top-nav-item.active {
    font-weight: 600;
    border-bottom: 2px solid #0156ff;
}

.top-nav-item ~ .top-nav-item {
    margin-left: 30px;
}

.cart-addition {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    .price {
        font-weight: 600;
    }
    .input-number {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 21px;
        padding: 20px;
        width: 70px;
        height: 50px;
        font-weight: 600;
        font-size: 13px;
        background-color: #f5f7ff;
        border-radius: 6px;
        cursor: default;
    }
    .btn-group {
        flex: -1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .input-number-btn {
        display: block;
        background-color: inherit;
        outline: none;
        border: none;
        width: 16px;
        height: 16px;
    }
    .add-to-cart {
        margin-right: 120px;
    }
}
</style>
