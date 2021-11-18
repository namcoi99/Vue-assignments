import { PRODUCT_BASE_URL } from './../constants';
import { getModule, VuexModule, Mutation, Action, Module } from 'vuex-module-decorators';
import store from '@/store';
// import { productService } from '../services/api.service';
import { IProduct, IPage } from '../types';
import axios from 'axios';

@Module({ dynamic: true, namespaced: true, store, name: 'products' })
class Product extends VuexModule {
    products: IProduct[] = [];
    productsCount = 0;

    @Mutation
    setProducts(products: IProduct[]) {
        this.products = [...products];
    }

    @Action({ commit: 'setProducts' })
    async getProducts(pageOption: IPage) {
        // const products = await productService.getList({
        //     _limit: pageOption.limit,
        //     _page: pageOption.page
        // })

        const response = await axios.get(PRODUCT_BASE_URL, {
            params: {
                _limit: pageOption.limit,
                _page: pageOption.page,
            },
        });
        return response.data;
    }

    get getAllProducts() {
        return this.products;
    }

    get getProductsCount() {
        return this.productsCount;
    }
}

export const productModule = getModule(Product);
