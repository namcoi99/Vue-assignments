import { ICategory, IPrice, IFilters, IColor, ISelectedPrice } from './../types';
import {
    VIEW_DETAIL_OPTION,
    POSITION_SORT_OPTION,
    TEN_PER_PAGE_OPTION,
    VIEW_DETAIL_TYPE,
    VIEW_CARD_TYPE,
    VIEW_CARD_OPTION,
} from './../constants';
import { getModule, VuexModule, Mutation, Action, Module } from 'vuex-module-decorators';
import store from '@/store';

@Module({ dynamic: true, namespaced: true, store, name: 'filter' })
class Filter extends VuexModule {
    viewOption: number[] = VIEW_DETAIL_OPTION;
    sortOption: string = POSITION_SORT_OPTION;
    pageOption: number = TEN_PER_PAGE_OPTION;
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
    ];

    filters: IFilters = {
        filterCategories: this.filterCategories,
        filterPrices: this.filterPrices,
        filterColors: this.filterColors,
    };

    filtersSelected: ISelectedPrice = {};

    get getViewOption() {
        return this.viewOption;
    }

    get getSortOption() {
        return this.sortOption;
    }

    get getPageOption() {
        return this.pageOption;
    }

    get getFilters() {
        return this.filters;
    }

    get getFiltersSelected() {
        return this.filtersSelected;
    }

    @Mutation
    updateViewOption(type: string) {
        if (type === VIEW_DETAIL_TYPE) {
            this.viewOption = VIEW_DETAIL_OPTION;
        }
        if (type === VIEW_CARD_TYPE) {
            this.viewOption = VIEW_CARD_OPTION;
        }
    }

    @Mutation
    updateSortOption(sortBy: string) {
        if (this.sortOption === sortBy) {
            return;
        }
        this.sortOption = sortBy;
    }

    @Mutation
    updatePageOption(perPage: number) {
        if (this.pageOption === perPage) {
            return;
        }
        this.pageOption = perPage;
    }

    @Mutation
    updateSelectedFilters(selectedFilter: { [x: string]: string | ISelectedPrice }) {
        Object.assign(this.filtersSelected, selectedFilter);
    }

    @Action({ commit: 'updateViewOption' })
    changeViewOption(type: string) {
        return type;
    }

    @Action({ commit: 'updateSortOption' })
    changeSortOption(sortBy: string) {
        return sortBy;
    }

    @Action({ commit: 'updatePageOption' })
    changePageOption(perPage: number) {
        return perPage;
    }

    @Action({ commit: 'updateSelectedFilters' })
    selectFilter(selectedFilter: { [x: string]: string | ISelectedPrice }) {
        return selectedFilter;
    }
}

export const filterModule = getModule(Filter);
