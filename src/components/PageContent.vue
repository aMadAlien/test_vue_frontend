<template>
  <div>
    <h2 class="mb-3">{{ title }}</h2>
    <h3 class="mb-3 fs-6">{{ subtitle }}</h3>
    <b-table v-if="totalRows" dark striped hover :items="items"></b-table>
    <p v-else-if="!items.length">Seems no data found...</p>
    <b-spinner v-else variant="primary" label="Spinning"></b-spinner>
  </div>
</template>

<script lang="ts">
import type { Currencies, Convertations } from '../interfaces/pages'

export default {
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    items: {  required: true },
    totalRows: { type: Number, required: true }
  }
}
</script>