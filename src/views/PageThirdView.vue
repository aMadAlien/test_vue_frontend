<template>
    <main class="my-5">
        <h2 class="mb-3">Page 3</h2>
        <h3 class="mb-3 fs-6">Paginated in frontend</h3>
        <b-table v-if="totalRows" dark striped hover :items="pagedItems"></b-table>
        <p v-else-if="!items.length">Seems no data found...</p>
        <b-spinner v-else variant="primary" label="Spinning"></b-spinner>

        <b-pagination
            v-if="totalRows"
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            aria-controls="my-table">
        </b-pagination>
    </main>
</template>

<script  lang="ts">
import { store } from '../storage'
import type { Currencies } from '../interfaces/pages'

export default {
    data() {
        return {
            currentPage: 1,
        }
    },
    beforeMount() {
        if (!this.items.length) {
            store.getters.thirdPageData
        }
    },
    computed: {
        items():Currencies[] { return store.state.thirdPageData },
        perPage():number { return store.state.perPage },
        totalRows():number { return store.getters.totalRows(this.items) },
        pagedItems():Currencies[] { return store.getters.itemsPerPage(this.currentPage, store.state.thirdPageData) },
    }
}
</script>
