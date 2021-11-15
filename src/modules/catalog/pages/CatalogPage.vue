<template>
    <div class="catalog">
        <AppHeader />
        <BodyContent />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/modules/catalog/layouts/AppHeader.vue';
import BodyContent from '@/modules/catalog/components/Catalog/BodyContent.vue';
export default defineComponent({
    components: {
        AppHeader,
        BodyContent,
    },
});
</script>

<style lang="scss">
.app-btn {
    border-radius: 50px;
    padding: 8px 26px;
    color: #fff;
    border: 2px solid #0156ff;
    background-color: #0156ff;
    font-weight: 600;
    img {
        filter: invert(24%) sepia(81%) saturate(7008%) hue-rotate(222deg) brightness(105%)
            contrast(101%);
    }
}

.app-btn:hover {
    opacity: 0.8;
}

.app-btn.plain:hover {
    color: #fff;
    background-color: #0156ff;
    img {
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(55deg) brightness(102%)
            contrast(101%);
    }
}

.app-btn.plain {
    background-color: #fff;
    color: #0156ff;
    img {
        filter: invert(24%) sepia(81%) saturate(7008%) hue-rotate(222deg) brightness(105%)
            contrast(101%);
    }
}

.app-btn.clear {
    color: #a2a6b0;
    border: 2px solid #a2a6b0;
    background-color: transparent;
}
.right {
    float: right !important;
}
.hidden {
    display: none !important;
}
</style>

<style scoped>
.catalog {
    font-family: Poppins;
    font-style: normal;
    font-size: 14px;
}
</style>
