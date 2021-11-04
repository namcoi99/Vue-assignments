import { RouteRecordRaw } from 'vue-router';
import ExamplePage from './pages/ExamplePage.vue';
import HomePage from './pages/HomePage.vue';
import MainLayout from '@/layouts/MainLayout.vue';

export default [
    {
        path: '/',
        component: MainLayout,
        meta: {
            public: true,
        },
        children: [
            {
                path: '',
                name: 'home',
                component: HomePage,
                meta: {
                    onlyWhenLoggedOut: true,
                    public: true,
                },
            },
        ],
    },
    {
        path: '/example',
        name: 'example',
        component: ExamplePage,
        meta: {
            public: true,
        },
    },
] as RouteRecordRaw[];
