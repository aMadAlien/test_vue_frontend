import { createStore } from 'vuex'
import type { gerenalState } from './interfaces/pages'

export const store = createStore({
    state () {
        return {
            url: 'http://127.0.0.1:8000/api',
            firstPageData: {},
            secondPageData: {},
            thirdPageData: {},
            perPage: 5,
        }
    },
    getters: {
        firstPageData: (state: gerenalState) => {
            fetch(`${state.url}/first`)
                .then(res => res.status !== 200 ? [] : res.json())
                .then(data => state.firstPageData = data ?? [])
        },
        secondPageData: (state: gerenalState) => (page: number = 1): void => {
            fetch(`${state.url}/second?page=${page}`)
                .then(res => res.status !== 200 ? [] : res.json())
                .then(data => state.secondPageData = data.data ?? [])
        },
        thirdPageData: (state: gerenalState) => {
            fetch(`${state.url}/third`)
                .then(res => res.status !== 200 ? [] : res.json())
                .then(data => state.thirdPageData = data ?? [])
        },
        totalRows: (state: gerenalState) => (data: any) => {
            return data.length
        },
        itemsPerPage: (state: gerenalState) => (currPage: number, items: any) => {
            const startIndex = (currPage - 1) * state.perPage;
            const endIndex = startIndex + state.perPage;
            return items.slice(startIndex, endIndex);
        },
    }
})