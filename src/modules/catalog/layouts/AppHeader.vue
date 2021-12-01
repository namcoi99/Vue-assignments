<template>
    <div class="app-header">
        <AppContact />
        <AppNavbar />
    </div>
</template>

<script>
import AppContact from './AppContact.vue';
import AppNavbar from './AppNavbar.vue';
export default {
    components: {
        AppContact,
        AppNavbar,
    },
};
</script>

<style scoped>
.app-header {
    border-bottom: 1px solid #cacdd8;
}
</style>
