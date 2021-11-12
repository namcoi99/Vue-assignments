<template>
    <div class="wrapper">
        <div class="catalog-contact">
            <div class="catalog-opening">
                Mon-Thu: <span class="opening-time">9:00 AM - 5:30 PM</span>
                <img class="catalog-icon" :src="downIcon" alt="down icon" />
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
                            :src="facebookIcon"
                            alt="facebook icon"
                        />
                    </router-link>
                    <router-link to="#">
                        <img
                            class="catalog-icon"
                            :src="instagramIcon"
                            alt="instagram icon"
                        />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            downIcon: require('@/assets/images/catalog/icon/down-icon.svg'),
            facebookIcon: require('@/assets/images/catalog/icon/facebook-icon.svg'),
            instagramIcon: require('@/assets/images/catalog/icon/instagram-icon.svg'),
        };
    },
});
</script>

<style scoped>
.wrapper {
    background-color: #020202;
}
.catalog-contact {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    height: 44px;
    max-width: 1396px;
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
    border-bottom: 2px solid #ffffff;
    color: #fff;
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
