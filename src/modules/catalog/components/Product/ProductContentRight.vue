<template>
    <div class="content-right">
        <div class="actions">
            <button class="action-btn">
                <img :src="mailIcon" alt="mail icon" />
            </button>
            <button class="action-btn">
                <img :src="statisticIcon" alt="statistic icon" />
            </button>
            <button class="action-btn">
                <img :src="heartIcon" alt="heart icon" />
            </button>
        </div>
        <img class="product-img" :src="imageUrl" alt="product image" />
        <div class="zip-brand">
            <img class="zip-logo" :src="zipLogoImg" alt="zip logo" />
            <p class="zip-text">
                own it now, up to 6 months interest free
                <a class="learn-more" href="#">learn more</a>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            mailIcon: require('@/assets/images/catalog/icon/mail-icon.svg'),
            statisticIcon: require('@/assets/images/catalog/icon/statistic-icon.svg'),
            heartIcon: require('@/assets/images/catalog/icon/heart-icon.svg'),
            zipLogoImg: require('@/assets/images/catalog/zip.png'),
        };
    },
    computed: {
        imageUrl(): string {
            // return require(`@/assets/images/catalog/${this.product.img[0]}.png`);
            return require(`@/assets/images/catalog/product/0.png`);
        },
    },
});
</script>

<style lang="scss" scoped>
.content-right {
    flex: 2;
    position: relative;
    margin-top: 76px;
    padding-left: 104px;
    .actions {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        left: 23px;
        top: 96px;
        .action-btn {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            background-color: #fff;
            border: 2px solid #a2a6b0;
            border-radius: 50%;
        }

        .action-btn ~ .action-btn {
            margin-top: 6px;
        }

        .action-btn:hover {
            opacity: 0.6;
        }
    }
    .product-img {
        display: block;
    }
}
.zip-brand {
    display: flex;
    align-items: center;
    .zip-text {
        display: inline-block;
        position: relative;
        margin-left: 26px;
        margin-bottom: 0;
        width: 180px;
        font-size: 12px;
        .learn-more {
            text-decoration: underline;
        }
    }
    .zip-text::before {
        display: inline-block;
        position: absolute;
        content: '';
        top: 50%;
        left: -14px;
        transform: translateY(-50%);
        border: 1px solid #00aeb8;
        height: 23px;
    }
}
</style>
