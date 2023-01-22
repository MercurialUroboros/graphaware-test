<template>
  <div class="bg-slate-600">
    <div v-if="!isTableFetched">Loading...</div>
    <BaseExpandableTable
      v-else
      :rows="tableData"
      @on-update-data-table="onUpdateDataTable"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, Ref } from 'vue'
import { getTableData } from './api'
import { type TableRow } from './types'
import BaseExpandableTable from './components/BaseExpandableTable.vue'

const tableData: Ref<TableRow[]> = ref([])
const isTableFetched = ref(false)

onMounted(async () => {
  tableData.value = await getTableData(1)
  isTableFetched.value = true
})

const onUpdateDataTable = (updatedTableRows: TableRow[]) => {
  // We can listen to this event to overwrite the original object,
  // Or we could ignore it, and preserve it. It depends on the use cases
  tableData.value = updatedTableRows
}

</script>
