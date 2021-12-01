<template>
    <div class="main-page">
        <AppHeader />
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/modules/catalog/layouts/AppHeader.vue';
export default defineComponent({
    components: {
        AppHeader,
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

.app-btn.disabled {
    opacity: 0.8;
    cursor: not-allowed;
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

.app-btn.dark {
    background-color: #000;
    color: #fff;
    border: none;
}

.app-btn.secondary {
    background-color: #fff;
    color: #a2a6b0;
    border: 2px solid #a2a6b0;
}

.app-btn.secondary:hover {
    background-color: #a2a6b0;
    color: #fff;
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
.fw-bold {
    font-weight: 600 !important;
}
</style>

<style scoped>
.main-page {
    font-family: Poppins;
    font-style: normal;
    font-size: 14px;
}
</style>
