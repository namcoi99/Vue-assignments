<template>
    <div class="catalog-header">
        <Contact />
        <Navbar />
    </div>
</template>

<script>
import Contact from '@/modules/catalog/layouts/Contact.vue';
import Navbar from '@/modules/catalog/layouts/Navbar.vue';
export default {
    components: {
        Contact,
        Navbar,
    },
};
</script>

<style scoped>
.catalog-header {
}
</style>
>
