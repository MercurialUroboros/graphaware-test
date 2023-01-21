<template>
  <div class="bg-slate-600">
    <div v-if="!isTableFetched">Loading...</div>
    <template v-else>
      <BaseExpandableTable
        v-for="(tRow, index) in tableData"
        :key="index"
        :rows="[tRow]"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive } from 'vue'
import { getTableData } from './api'
import { type TableRow } from './types'
import BaseExpandableTable from './components/BaseExpandableTable.vue'

let tableData: TableRow[] = reactive([])
const isTableFetched = ref(false)

onMounted(async () => {
  tableData = await getTableData(2)
  isTableFetched.value = true
})

</script>
