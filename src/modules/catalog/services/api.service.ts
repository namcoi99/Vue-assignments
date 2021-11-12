import { PRODUCT_BASE_URL } from './../constants';
import service from '@/plugins/axios';
import { BaseService } from '@/utils/api';

class ProductService extends BaseService {}
export const productService = new ProductService(
    {
        baseUrl: PRODUCT_BASE_URL,
    },
    service,
);
