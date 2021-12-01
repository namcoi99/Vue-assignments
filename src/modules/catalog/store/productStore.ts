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
    loading = false;

    @Mutation
    setLoading(bool: boolean) {
        this.loading = bool;
    }

    @Mutation
    setProducts(responseData: { products: IProduct[]; totalProducts: number }) {
        this.products = responseData.products;
        this.productsCount = responseData.totalProducts;
    }

    @Action({ commit: 'setProducts' })
    async getProducts(pageOption: IPage) {
        const response = await axios.get(PRODUCT_BASE_URL, {
            params: {
                _limit: pageOption.limit,
                _page: pageOption.page,
            },
        });
        console.log(response);
        console.log(response.headers['x-total-count']);

        return {
            products: response.data,
            totalProducts: response.headers['x-total-count'],
        };
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
