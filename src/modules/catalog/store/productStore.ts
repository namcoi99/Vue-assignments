import { PRODUCT_BASE_URL } from './../constants';
import { getModule, VuexModule, Mutation, Action, Module } from 'vuex-module-decorators';
import store from '@/store';
import { IProduct, IPage } from '../types';
import axios from 'axios';

@Module({ dynamic: true, namespaced: true, store, name: 'products' })
class Product extends VuexModule {
    products: IProduct[] = [];
    productsCount = 0;
    loading = false;

    @Mutation
    SET_LOADING(bool: boolean) {
        this.loading = bool;
    }

    @Mutation
    SET_PRODUCTS(responseData: { products: IProduct[]; totalProducts: number }) {
        this.products = responseData.products;
        this.productsCount = responseData.totalProducts;
    }

    @Action({ commit: 'SET_PRODUCTS' })
    async getProducts(pageOption: IPage) {
        const response = await axios.get(PRODUCT_BASE_URL, {
            params: {
                _limit: pageOption.limit,
                _page: pageOption.page,
            },
        });
        return {
            products: response.data,
            totalProducts: response.headers['x-total-count'],
        };
    }

    @Action
    async getProductById(id: number) {
        const response = await axios.get(PRODUCT_BASE_URL, {
            params: {
                id: id,
            },
        });
        return response.data[0];
    }

    get getAllProducts() {
        return this.products;
    }

    get getProductsCount() {
        return this.productsCount;
    }

    get getLoading() {
        return this.loading;
    }
}

export const productModule = getModule(Product);
