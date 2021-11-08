<template>
    <div class="catalog-contact">
        <div class="catalog-opening">
            Mon-Thu: <span class="opening-time">9:00 AM - 5:30 PM</span>
            <img
                class="catalog-icon"
                :src="require('@/assets/images/catalog/down-icon.svg')"
                alt="down icon"
            />
        </div>
        <div class="catalog-address">
            Visit our showroom in 1234 Street Adress City Address, 1234
            <router-link to="#">
                <span class="contact-us"> Contact Us </span>
            </router-link>
        </div>
        <div class="catalog-phone">
            Call Us: (00) 1234 5678
            <div class="social-list">
                <router-link to="#">
                    <img
                        class="catalog-icon"
                        :src="require('@/assets/images/catalog/facebook-icon.svg')"
                        alt="facebook"
                    />
                </router-link>
                <router-link to="#">
                    <img
                        class="catalog-icon"
                        :src="require('@/assets/images/catalog/instagram-icon.svg')"
                        alt="instagram"
                    />
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.catalog-contact {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #020202;
    height: 44px;
    padding: 0 258px;
}

.catalog-opening {
    color: #a2a6b0;
}

.catalog-address {
    color: #acacac;
}

.opening-time {
    color: #fff;
}

.contact-us {
    color: #fff;
    border-bottom: 2px solid #ffffff;
}

.catalog-phone {
    color: #fff;
}

.social-list {
    display: inline-block;
    margin-left: 4px;
}

.catalog-icon {
    margin: 0 12px;
}

.contact-us:hover,
.catalog-icon:hover {
    opacity: 0.8;
    cursor: pointer;
}
</style>
>
