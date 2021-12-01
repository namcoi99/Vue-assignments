<template>
    <div class="app-navbar">
        <router-link :to="{ name: 'catalog' }">
            <div class="app-navbar-brand">
                <img :src="logo" alt="logo" />
            </div>
        </router-link>
        <ul class="app-navbar-nav fw-bold">
            <li class="nav-item">
                <router-link :to="{ name: 'catalog' }">Laptops</router-link>
            </li>
            <li class="nav-item">
                <router-link to="#">Desktop PCs</router-link>
            </li>
            <li class="nav-item">
                <router-link to="#"> Devices</router-link>
            </li>
            <li class="nav-item">
                <router-link to="#">Printers & Scanners</router-link>
            </li>
            <li class="nav-item">
                <router-link to="#">PC Parts</router-link>
            </li>
            <li class="nav-item">
                <router-link to="#">All Other Products</router-link>
            </li>
            <li class="nav-item">
                <router-link to="#">Repairs</router-link>
            </li>
        </ul>
        <router-link to="#">
            <button class="app-btn plain">Our Deals</button>
        </router-link>
        <div class="navbar-btn navbar-search-btn">
            <img :src="searchIcon" alt="search icon" />
        </div>
        <router-link :to="{ name: 'shoppingCart' }">
            <div class="navbar-btn navbar-cart-btn">
                <img :src="cartIcon" alt="cart icon" />
                <span v-if="productsNumber" class="cart-badge">
                    {{ productsNumber }}
                </span>
            </div>
        </router-link>
        <div class="navbar-avatar">
            <img :src="avatar" alt="avatar" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { cartModule } from '../store/cartStore';

export default defineComponent({
    data() {
        return {
            logo: require('@/assets/images/catalog/logo.png'),
            avatar: require('@/assets/images/catalog/avatar.png'),
            cartIcon: require('@/assets/images/catalog/icon/cart-icon.svg'),
            searchIcon: require('@/assets/images/catalog/icon/search-icon.svg'),
        };
    },
    computed: {
        productsNumber(): number {
            return cartModule.getProductsNumber;
        },
    },
});
</script>

<style scoped>
.app-navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    height: 80px;
    max-width: 1400px;
}

.app-navbar-nav {
    display: inline-flex;
    margin: 0;
    list-style-type: none;
}

.nav-item {
    padding: 0 12.5px;
}

.navbar-btn.navbar-search-btn {
    margin-left: auto;
}

.navbar-btn:hover {
    cursor: pointer;
}

.navbar-cart-btn {
    position: relative;
    margin: 0 28px;
}

.cart-badge {
    position: absolute;
    top: -10px;
    right: -10px;
    text-align: center;
    line-height: 16px;
    font-size: 10px;
    background-color: #0156ff;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    color: #fff;
}
</style>
