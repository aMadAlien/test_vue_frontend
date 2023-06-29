<template>
  <main class="my-5">
    <PageContent :title="'Page 2'" :subtitle="'Paginated by model in Laravel'" :items="items" :totalRows="totalRows" />

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
import PageContent from '../components/PageContent.vue'

export default {
  data() {
    return {
      currentPage: 1,
    }
  },
  beforeMount() {
    if (!this.items.length) {
      store.getters.secondPageData()
    }
  },
  computed: {
    items():Currencies[] { return store.state.secondPageData },
    perPage():number { return store.state.perPage },
    totalRows():number { return store.getters.totalRows(this.items) },
  },
  watch: {
    'currentPage'() {
      store.getters.secondPageData(this.currentPage)
    }
  },
  components: {
    PageContent
  }
}
</script>
