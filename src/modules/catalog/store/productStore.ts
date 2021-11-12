import { getModule, VuexModule, Mutation, Action, Module } from 'vuex-module-decorators';
import store from '@/store';
import { productService } from '../services/api.service';
import { IProduct } from '../types';

@Module({ dynamic: true, namespaced: true, store, name: 'products' })
class Product extends VuexModule {
    products: IProduct[] = [
        {
            id: 1,
            img: ['product/1-1', 'product/1-2', 'product/1-3'],
            code: 'SKU D5515AI3',
            name: 'MSI MPG Trident 1 ',
            category: 'HP/COMPAQ PCS',
            description:
                'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
            price: 3000,
            discount: 0.2,
            specs: {
                CPU: 'N/A',
                Featured: 'N/A',
                IOPorts: 'N/A',
            },
            details: [
                'Intel Core i7-10700F',
                'Intel H410',
                'WHITE',
                'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
                'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
                '2 total slots (64GB Max)',
                '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
                'Gaming Keyboard GK30 + Gaming Mouse GM11',
                '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
                'Intel WGI219Vethernet (10/100/1000M)',
                'AX200 (WIFI 6)+BT5.1',
                'PSU 330W',
                'Fan Cooler',
            ],
            colors: ['#4B4D4F', '#F2E9DC', '#EAE8EB'],
            inStock: true,
            rating: 4,
            reviews: 4,
        },
        {
            id: 2,
            img: ['product/2-1', 'product/2-2', 'product/2-3'],
            code: 'SKU D5515AI2',
            name: 'MSI MPG Trident 2 ',
            category: 'MSI ALL-IN-ONE PCS',
            description:
                'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
            price: 3000,
            discount: 0.2,
            specs: {
                CPU: 'N/A',
                Featured: 'N/A',
                IOPorts: 'N/A',
            },
            details: [
                'Intel Core i7-10700F',
                'Intel H410',
                'WHITE',
                'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
                'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
                '2 total slots (64GB Max)',
                '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
                'Gaming Keyboard GK30 + Gaming Mouse GM11',
                '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
                'Intel WGI219Vethernet (10/100/1000M)',
                'AX200 (WIFI 6)+BT5.1',
                'PSU 330W',
                'Fan Cooler',
            ],
            colors: ['#4B4D4F', '#F2E9DC', '#EAE8EB'],
            inStock: true,
            rating: 4,
            reviews: 4,
        },
        {
            id: 3,
            img: ['product/3-1', 'product/3-2', 'product/3-3'],
            code: 'SKU D5515AI6',
            category: 'CUSTOM PCS',
            name: 'MSI MPG Trident 3 ',
            description:
                'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
            price: 3500,
            discount: 0.1,
            specs: {
                CPU: 'N/A',
                Featured: 'N/A',
                IOPorts: 'N/A',
            },
            details: [
                'Intel Core i7-10700F',
                'Intel H410',
                'WHITE',
                'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
                'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
                '2 total slots (64GB Max)',
                '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
                'Gaming Keyboard GK30 + Gaming Mouse GM11',
                '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
                'Intel WGI219Vethernet (10/100/1000M)',
                'AX200 (WIFI 6)+BT5.1',
                'PSU 330W',
                'Fan Cooler',
            ],
            colors: ['#4B4D4F', '#F2E9DC', '#EAE8EB'],
            inStock: true,
            rating: 4,
            reviews: 4,
        },
        {
            id: 4,
            img: ['product/4-1', 'product/4-2', 'product/4-3'],
            code: 'SKU D5515AI0',
            category: 'CUSTOM PCS',
            name: 'MSI MPG Trident 0 ',
            description:
                'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
            price: 2900,
            discount: 0,
            specs: {
                CPU: 'N/A',
                Featured: 'N/A',
                IOPorts: 'N/A',
            },
            details: [
                'Intel Core i7-10700F',
                'Intel H410',
                'WHITE',
                'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
                'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
                '2 total slots (64GB Max)',
                '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
                'Gaming Keyboard GK30 + Gaming Mouse GM11',
                '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
                'Intel WGI219Vethernet (10/100/1000M)',
                'AX200 (WIFI 6)+BT5.1',
                'PSU 330W',
                'Fan Cooler',
            ],
            colors: ['#4B4D4F', '#F2E9DC', '#EAE8EB'],
            inStock: true,
            rating: 4,
            reviews: 4,
        },
        {
            id: 5,
            img: ['product/5-1', 'product/5-2', 'product/5-3'],
            code: 'SKU D5515AI5',
            category: 'CUSTOM PCS',
            name: 'MSI MPG Trident 5 ',
            description:
                'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
            price: 2900,
            discount: 0.1,
            specs: {
                CPU: 'N/A',
                Featured: 'N/A',
                IOPorts: 'N/A',
            },
            details: [
                'Intel Core i7-10700F',
                'Intel H410',
                'WHITE',
                'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
                'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
                '2 total slots (64GB Max)',
                '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
                'Gaming Keyboard GK30 + Gaming Mouse GM11',
                '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
                'Intel WGI219Vethernet (10/100/1000M)',
                'AX200 (WIFI 6)+BT5.1',
                'PSU 330W',
                'Fan Cooler',
            ],
            colors: ['#4B4D4F', '#F2E9DC', '#EAE8EB'],
            inStock: true,
            rating: 4,
            reviews: 4,
        },
        {
            id: 6,
            img: ['product/6-1', 'product/6-2', 'product/6-3'],
            code: 'SKU D5515AI6',
            category: 'CUSTOM PCS',
            name: 'MSI MPG Trident 6 ',
            description:
                'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
            price: 2900,
            discount: 0,
            specs: {
                CPU: 'N/A',
                Featured: 'N/A',
                IOPorts: 'N/A',
            },
            details: [
                'Intel Core i7-10700F',
                'Intel H410',
                'WHITE',
                'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
                'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
                '2 total slots (64GB Max)',
                '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
                'Gaming Keyboard GK30 + Gaming Mouse GM11',
                '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
                'Intel WGI219Vethernet (10/100/1000M)',
                'AX200 (WIFI 6)+BT5.1',
                'PSU 330W',
                'Fan Cooler',
            ],
            colors: ['#4B4D4F', '#F2E9DC', '#EAE8EB'],
            inStock: true,
            rating: 4,
            reviews: 4,
        },
    ];

    @Mutation
    SET_PRODUCTS(products: IProduct[]) {
        this.products = products;
    }

    @Action
    getProducts() {
        productService
            .getList({})
            .then((response) => {
                console.log('response', response);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    get getAllProducts() {
        return this.products;
    }
}

export const productModule = getModule(Product);
