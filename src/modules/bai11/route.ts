import { RouteRecordRaw } from 'vue-router';
import InsideOpenArt from './pages/InsideOpenArt.vue';

export default [
    {
        path: '/bai11',
        name: 'bai11',
        component: InsideOpenArt,
        meta: {
            public: true,
        },
    },
] as RouteRecordRaw[];
