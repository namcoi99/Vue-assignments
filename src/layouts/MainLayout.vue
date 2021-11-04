<template>
    <div class="main-wrapper">
        <layouts-sidebar />
        <!-- Page Wrapper -->
        <div class="page-wrapper">
            <!-- Page Content -->
            <layouts-topbar />
            <div class="page-content">
                <div class="container-fluid">
                    <router-view v-slot="{ Component }">
                        <transition name="fade-transform" mode="out-in">
                            <component :is="Component" />
                        </transition>
                    </router-view>
                </div>
                <footer class="footer text-center text-sm-start">
                    © 2021 Dastone
                    <span class="text-muted d-none d-sm-inline-block float-end"
                        >Crafted with <i class="mdi mdi-heart text-danger"></i> by
                        Mannatthemes</span
                    >
                </footer>
                <!--end footer-->
            </div>
            <!-- /Page Content -->
        </div>
        <!-- /Page Wrapper -->
    </div>
</template>

<script lang="ts">
import { appModule } from '@/store/app';
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class MainLayout extends Vue {
    created(): void {
        const className = ['main_body'];
        if (appModule.isMiniSidebar) {
            className.push('mini-sidebar');
            if (appModule.isExpandMenu) {
                className.push('expand-menu');
            }
        }
        className.forEach((name) => {
            document.body.classList.add(name);
        });
    }
}
</script>

<style lang="scss" scoped></style>
