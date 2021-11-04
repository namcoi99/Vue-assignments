<template>
    <div class="left-sidenav">
        <!-- LOGO -->
        <div class="brand">
            <a href="/" class="logo">
                <span>
                    <img
                        :src="require('@/assets/images/logo.png')"
                        alt="logo-small"
                        class="logo-sm"
                    />
                </span>
                <span>
                    <img
                        :src="require('@/assets/images/logo.png')"
                        alt="logo-large"
                        class="logo-lg logo-light"
                    />
                    <img
                        :src="require('@/assets/images/logo.png')"
                        alt="logo-large"
                        class="logo-lg logo-dark"
                    />
                </span>
            </a>
        </div>
        <!--end logo-->
        <div class="menu-content h-100 mm-active" data-simplebar="init">
            <div class="simplebar-wrapper" style="margin: 0px 0px -70px">
                <div class="simplebar-height-auto-observer-wrapper">
                    <div class="simplebar-height-auto-observer"></div>
                </div>
                <div class="simplebar-mask">
                    <div class="simplebar-offset" style="right: 0px; bottom: 0px">
                        <div
                            class="simplebar-content-wrapper"
                            style="height: 100%; overflow: hidden scroll"
                        >
                            <div class="simplebar-content" style="padding: 0px 0px 70px">
                                <ul class="metismenu left-sidenav-menu mm-show">
                                    <li class="menu-label mt-0">Main</li>
                                    <li>
                                        <a href="javascript: void(0);">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="
                                                    feather feather-home
                                                    align-self-center
                                                    menu-icon
                                                "
                                            >
                                                <path
                                                    d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                                                ></path>
                                                <polyline
                                                    points="9 22 9 12 15 12 15 22"
                                                ></polyline></svg
                                            ><span>Dashboard</span
                                            ><span class="menu-arrow"
                                                ><i
                                                    class="mdi mdi-chevron-right"
                                                ></i></span
                                        ></a>
                                        <ul
                                            class="nav-second-level mm-collapse"
                                            aria-expanded="false"
                                        >
                                            <li class="nav-item">
                                                <a class="nav-link" href="index.html"
                                                    ><i class="ti-control-record"></i
                                                    >Analytics</a
                                                >
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    class="nav-link"
                                                    href="sales-index.html"
                                                    ><i class="ti-control-record"></i
                                                    >Sales</a
                                                >
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="simplebar-placeholder"
                    style="width: auto; height: 903px"
                ></div>
            </div>
            <div class="simplebar-track simplebar-horizontal" style="visibility: hidden">
                <div class="simplebar-scrollbar" style="width: 0px; display: none"></div>
            </div>
            <div class="simplebar-track simplebar-vertical" style="visibility: visible">
                <div
                    class="simplebar-scrollbar"
                    style="
                        height: 871px;
                        transform: translate3d(0px, 0px, 0px);
                        display: block;
                    "
                ></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Sidebar extends Vue {}
</script>

<style lang="scss" scoped></style>
