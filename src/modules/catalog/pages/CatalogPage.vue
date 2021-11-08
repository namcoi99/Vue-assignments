<template>
    <div class="catalog">
        <Header />
        <Navbar />
    </div>
</template>

<script>
import Navbar from '@/modules/catalog/layouts/Navbar.vue';
import Header from '@/modules/catalog/layouts/Header.vue';
export default {
    components: {
        Header,
        Navbar,
    },
};
</script>

<style scoped>
.catalog {
    /* padding: 0 260px; */
    font-family: Poppins;
    font-style: normal;
    font-size: 14px;
}
</style>
