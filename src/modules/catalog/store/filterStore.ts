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

@Module({ dynamic: true, namespaced: true, store, name: 'Filter' })
class Filter extends VuexModule {
    viewOption: number[] = VIEW_DETAIL_OPTION;
    sortOption: string = POSITION_SORT_OPTION;
    pageOption: number = TEN_PER_PAGE_OPTION;

    get getViewOption() {
        return this.viewOption;
    }

    get getSortOption() {
        return this.sortOption;
    }

    get getPageOption() {
        return this.pageOption;
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
}

export const filterModule = getModule(Filter);
