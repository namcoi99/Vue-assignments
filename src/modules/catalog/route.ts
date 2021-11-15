import { RouteRecordRaw } from 'vue-router';
import CatalogPage from './pages/CatalogPage.vue';
import ProductPage from './pages/ProductPage.vue';
import ProductAbout from './components/Product/ProductAbout.vue';
import ProductDetails from './components/Product/ProductDetails.vue';
import ProductSpecs from './components/Product/ProductSpecs.vue';

export default [
    {
        path: '/catalog',
        name: 'catalog',
        component: CatalogPage,
        meta: {
            public: true,
        },
    },
    {
        path: '/product/:id',
        name: 'product/:id',
        component: ProductPage,
        meta: {
            public: true,
        },
        children: [
            {
                path: '',
                name: 'ProductAbout',
                component: ProductAbout,
            },
            {
                path: 'details',
                name: 'ProductDetails',
                component: ProductDetails,
            },
            {
                path: 'specs',
                name: 'ProductSpecs',
                component: ProductSpecs,
            },
        ],
    },
] as RouteRecordRaw[];
