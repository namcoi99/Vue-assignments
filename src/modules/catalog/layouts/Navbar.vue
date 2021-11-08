<template>
    <div class="catalog-navbar">
        <div class="catalog-navbar-brand">
            <img :src="require('@/assets/images/catalog/logo.png')" alt="logo" />
        </div>
        <ul class="catalog-navbar-nav">
            <li class="nav-item">
                <router-link to="#">Laptops</router-link>
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
            <button class="deal-btn">Our Deals</button>
        </router-link>
        <div class="navbar-btn navbar-search-btn">
            <img
                :src="require('@/assets/images/catalog/search-icon.svg')"
                alt="search icon"
            />
        </div>
        <div class="navbar-btn navbar-cart-btn">
            <img
                :src="require('@/assets/images/catalog/cart-icon.svg')"
                alt="cart icon"
            />
        </div>
        <div class="navbar-avatar">
            <img :src="require('@/assets/images/catalog/avatar.png')" alt="avatar" />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.catalog-navbar {
    display: flex;
    flex-direction: row;
    height: 80px;
    padding: 0 260px;
    align-items: center;
    border-bottom: 1px solid #cacdd8;
}

.catalog-navbar-nav {
    display: inline-flex;
    list-style-type: none;
    margin: 0;
}

.nav-item {
    font-weight: 600;
    padding: 0 12.5px;
}

.deal-btn {
    border: 2px solid #0156ff;
    border-radius: 50px;
    padding: 8px 26px;
    margin-right: auto;
    background-color: #fff;
    color: #0156ff;
}

.deal-btn:hover {
    color: #fff;
    background-color: #0156ff;
}

.navbar-btn.navbar-search-btn {
    margin-left: auto;
}

.navbar-btn:hover {
    cursor: pointer;
}

.navbar-cart-btn {
    margin: 0 28px;
    position: relative;
}

.navbar-cart-btn::after {
    display: block;
    content: '2';
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: #0156ff;
    color: #fff;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    text-align: center;
    line-height: 16px;
    font-size: 10px;
}
</style>
