<template>
  <main class="my-5">
      <h2 class="mb-3">Page 2</h2>
      <h3 class="mb-3 fs-6">Paginated by model in Laravel</h3>
      <b-table v-if="totalRows" dark striped hover :items="items"></b-table>
      <p v-else-if="noData">Seems no data found...</p>
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
export default {
  data() {
      return {
          perPage: 5,
          currentPage: 1,
          items: [] as any[],
          noData: false,
          totalRows: 0
      }
  },
  beforeMount() {
      this.getAboutData()
  },
  mounted() {
    console.log("currentPage", this.currentPage)
  },
  methods: {
      getAboutData(page: number = 1): void {
          fetch(`http://127.0.0.1:8000/api/second?page=${page}`)
              .then(res => res.status !== 200 ? (this.noData = true) : res.json())
              .then(data => this.items = data.data)
      }
  },
  computed: {
    totalRows(): number {
      return this.items.length
    },
    pagedItems(): any[] {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.items.slice(startIndex, endIndex);
    },
  },
  watch: {
    'currentPage'() {
      this.getAboutData(this.currentPage)
      console.log("curr page changed", this.totalRows);
    }
  }
}
</script>
