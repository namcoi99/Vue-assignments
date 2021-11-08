import { RouteRecordRaw } from 'vue-router';
import CatalogPage from './pages/CatalogPage.vue';

export default [
    {
        path: '/catalog',
        name: 'catalog',
        component: CatalogPage,
        meta: {
            public: true,
        },
    },
] as RouteRecordRaw[];
