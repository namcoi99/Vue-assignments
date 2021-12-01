import { RouteRecordRaw } from 'vue-router';
import CatalogBodyContent from './components/catalog/BodyContent.vue';
import CartBodyContent from './components/shopping-cart/BodyContent.vue';
import MainPage from './pages/MainPage.vue';

export default [
    {
        path: '/final-assignments',
        name: 'pageLayout',
        component: MainPage,
        meta: {
            public: true,
        },
        props: (route) => ({ page: parseInt(route.query.page as string) || 1 }),
        children: [
            {
                path: '',
                name: 'catalog',
                component: CatalogBodyContent,
            },
            {
                path: 'shopping-cart',
                name: 'shoppingCart',
                component: CartBodyContent,
            },
        ],
    },
] as RouteRecordRaw[];
