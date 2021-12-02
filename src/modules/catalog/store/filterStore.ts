import {
    ICategory,
    IPrice,
    IFilters,
    IColor,
    ISelectedPrice,
    ISelectedFilters,
} from './../types';
import {
    VIEW_DETAIL_OPTION,
    POSITION_SORT_OPTION,
    VIEW_DETAIL_TYPE,
    VIEW_CARD_TYPE,
    VIEW_CARD_OPTION,
    FIVE_PER_PAGE_OPTION,
    DEFAULT_CURRENT_PAGE,
} from './../constants';
import { getModule, VuexModule, Mutation, Action, Module } from 'vuex-module-decorators';
import store from '@/store';

@Module({ dynamic: true, namespaced: true, store, name: 'filter' })
class Filter extends VuexModule {
    options: {
        view: number[];
        sort: string;
        page: number;
    } = {
        view: VIEW_DETAIL_OPTION,
        sort: POSITION_SORT_OPTION,
        page: FIVE_PER_PAGE_OPTION,
    };

    currentPage: number = DEFAULT_CURRENT_PAGE;
    filterCategories: ICategory[] = [
        {
            id: 1,
            name: 'CUSTOM PCS',
            quantity: 15,
        },
        {
            id: 2,
            name: 'MSI ALL-IN-ONE PCS',
            quantity: 45,
        },
        {
            id: 3,
            name: 'HP/COMPAQ PCS',
            quantity: 1,
        },
    ];

    filterPrices: IPrice[] = [
        {
            id: 1,
            min: 0,
            max: 1000,
            quantity: 19,
        },
        {
            id: 2,
            min: 1000,
            max: 2000,
            quantity: 21,
        },
        {
            id: 3,
            min: 2000,
            max: 3000,
            quantity: 9,
        },
        {
            id: 4,
            min: 3000,
            max: 4000,
            quantity: 6,
        },
        {
            id: 5,
            min: 4000,
            max: 5000,
            quantity: 3,
        },
        {
            id: 6,
            min: 5000,
            max: 6000,
            quantity: 1,
        },
        {
            id: 7,
            min: 6000,
            max: 7000,
            quantity: 1,
        },
        {
            id: 8,
            min: 7000,
            max: 99999999,
            quantity: 1,
        },
    ];

    filterColors: IColor[] = [
        {
            id: 1,
            hexCode: '#DB0000',
        },
        {
            id: 2,
            hexCode: '#000000',
        },
        {
            id: 3,
            hexCode: '#4B4D4F',
        },
        {
            id: 4,
            hexCode: '#F2E9DC',
        },
        {
            id: 5,
            hexCode: '#EAE8EB',
        },
    ];

    filters: IFilters = {
        filterCategories: this.filterCategories,
        filterPrices: this.filterPrices,
        filterColors: this.filterColors,
    };

    filtersSelected: ISelectedFilters = {
        categories: [],
        prices: [],
        colors: [],
        name: '',
    };

    get getOptions() {
        return this.options;
    }

    get getFilters() {
        return this.filters;
    }

    get getFiltersSelected() {
        return this.filtersSelected;
    }

    get getCurrentPage() {
        return this.currentPage;
    }

    @Mutation
    SELECT_VIEW_OPTION(type: string) {
        if (type === VIEW_DETAIL_TYPE) {
            this.options.view = VIEW_DETAIL_OPTION;
        }
        if (type === VIEW_CARD_TYPE) {
            this.options.view = VIEW_CARD_OPTION;
        }
    }

    @Mutation
    SELECT_SORT_OPTION(sortBy: string) {
        if (this.options.sort === sortBy) {
            return;
        }
        this.options.sort = sortBy;
    }

    @Mutation
    SELECT_PAGE_OPTION(perPage: number) {
        if (this.options.page === perPage) {
            return;
        }
        this.options.page = perPage;
    }

    @Mutation
    SELECT_CATEGORY(category: string) {
        const categoriesSelected = this.filtersSelected.categories;
        const index = this.filtersSelected.categories.indexOf(category);
        if (index > -1) {
            categoriesSelected.splice(index, 1);
        } else {
            categoriesSelected.push(category);
        }
    }

    @Mutation
    SELECT_PRICE(price: ISelectedPrice) {
        const pricesSelected = this.filtersSelected.prices;
        const index = this.filtersSelected.prices.findIndex(
            (priceSelected) =>
                priceSelected.max === price.max && priceSelected.min === price.min,
        );
        if (index > -1) {
            pricesSelected.splice(index, 1);
        } else {
            pricesSelected.push(price);
        }
    }

    @Mutation
    SELECT_COLOR(color: string) {
        const colorsSelected = this.filtersSelected.colors;
        const index = this.filtersSelected.colors.indexOf(color);
        if (index > -1) {
            colorsSelected.splice(index, 1);
        } else {
            colorsSelected.push(color);
        }
    }

    @Mutation
    SELECT_PAGE(pageNumber: number) {
        this.currentPage = pageNumber;
    }

    @Mutation
    CLEAR_FILTER() {
        this.filtersSelected.categories = [];
        this.filtersSelected.colors = [];
        this.filtersSelected.prices = [];
        this.filtersSelected.name = '';
    }

    @Action({ commit: 'SELECT_VIEW_OPTION' })
    selectViewOption(type: string) {
        return type;
    }

    @Action({ commit: 'SELECT_SORT_OPTION' })
    selectSortOption(sortBy: string) {
        return sortBy;
    }

    @Action({ commit: 'SELECT_PAGE_OPTION' })
    selectPageOption(perPage: number) {
        return perPage;
    }

    @Action({ commit: 'SELECT_CATEGORY' })
    selectCategory(category: string) {
        return category;
    }

    @Action({ commit: 'SELECT_PRICE' })
    selectPrice(price: ISelectedPrice) {
        return price;
    }

    @Action({ commit: 'SELECT_COLOR' })
    selectColor(color: string) {
        return color;
    }

    @Action({ commit: 'SELECT_PAGE' })
    selectPage(pageNumber: number) {
        return pageNumber;
    }
}

export const filterModule = getModule(Filter);
