<template>
    <main class="my-5">
        <h2 class="mb-3">Page 3</h2>
        <h3 class="mb-3 fs-6">Paginated in frontend</h3>
        <b-table v-if="totalRows" dark striped hover :items="pagedItems"></b-table>
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
        }
    },
    beforeMount() {
        this.getAboutData()
    },
    methods: {
        getAboutData(): void {
            fetch('http://127.0.0.1:8000/api/third')
                .then(res => res.status !== 200 ? (this.noData = true) : res.json())
                .then(data => this.items = data)
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
    }
}
</script>
