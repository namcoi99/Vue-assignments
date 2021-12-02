import { RouteRecordRaw } from 'vue-router';
import MainPage from './pages/MainPage.vue';
import CatalogBodyContent from './components/catalog/CatalogBodyContent.vue';
import CartBodyContent from './components/shopping-cart/CartBodyContent.vue';
import ProductBodyContent from './components/product/ProductBodyContent.vue';
import ProductAbout from './components/product/ProductAbout.vue';
import ProductDetails from './components/product/ProductDetails.vue';
import ProductSpecs from './components/product/ProductSpecs.vue';

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
            {
                path: '/product/:id',
                name: 'productPage',
                component: ProductBodyContent,
                meta: {
                    public: true,
                },
                props: true,
                children: [
                    {
                        path: '',
                        name: 'productAbout',
                        component: ProductAbout,
                    },
                    {
                        path: 'details',
                        name: 'productDetails',
                        component: ProductDetails,
                    },
                    {
                        path: 'specs',
                        name: 'productSpecs',
                        component: ProductSpecs,
                    },
                ],
            },
        ],
    },
] as RouteRecordRaw[];
