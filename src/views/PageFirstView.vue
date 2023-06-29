<template>
  <main class="my-5">
      <h2 class="mb-3">Page 1</h2>
      <h3 class="mb-3 fs-5">Last convertations</h3>
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
import type { Convertations } from '../interfaces/pages'

export default {
  data() {
    return {
      currentPage: 1,
    }
  },
  beforeMount() {
    if (!this.items.length) {
      store.getters.firstPageData
    }
  },
  computed: {
    items():Convertations[] { return store.state.firstPageData },
    perPage():number { return store.state.perPage },
    totalRows():number { return store.getters.totalRows(this.items) },
    pagedItems():Convertations[] { return store.getters.itemsPerPage(this.currentPage, store.state.firstPageData) },
  }
}
</script>