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
        props: (route) => ({ page: parseInt(route.query.page as string) || 1 }),
    },
] as RouteRecordRaw[];
