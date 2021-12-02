<template>
    <div class="content-left">
        <div class="product-info">
            <h1>{{ product.name }}</h1>
            <a class="app-link" href="#"> Be the first to review this product </a>
            <router-view :product="product"></router-view>
            <div class="content-left__footer">
                <span class="question">
                    Have a question?
                    <a class="app-link contact" href="#">Contact Us</a>
                </span>
                <span class="code">{{ product.code }}</span>
            </div>
        </div>
        <div class="more-information">+ MORE INFORMATION</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IProduct } from '../../types';

export default defineComponent({
    props: {
        product: {
            type: Object as PropType<IProduct>,
            required: true,
        },
    },
});
</script>

<style lang="scss" scoped>
.content-left {
    flex: 3;
    background-color: #f5f7ff;
    padding: 64px 0;
    .content-left__footer {
        margin-top: 31px;
        .question {
            font-size: 12px;
            font-weight: 600;
        }
        .code {
            float: right;
            font-weight: 300;
            font-size: 12px;
        }
    }
    .more-information {
        margin-top: 82px;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
    }
}
.product-info {
    padding: 0 120px;
    .app-link {
        margin-bottom: 24px;
    }
}
</style>
