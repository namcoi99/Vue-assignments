import { RouteRecordRaw } from 'vue-router';
import ProductPage from './pages/ProductPage.vue';

export default [
    {
        path: '/bai12',
        name: 'bai12',
        component: ProductPage,
        meta: {
            public: true,
        },
    },
] as RouteRecordRaw[];
