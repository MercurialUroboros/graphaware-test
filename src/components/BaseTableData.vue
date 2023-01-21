<template>
  <tbody>
    <tr>
      <td class="flex items-center justify-center h-9">
        <button v-if="kidsData.length > 0" type="button" class="bg-green-500 h-6 w-6 hover:text-white"
          @click="showSubTable = !showSubTable">
          {{ showSubTable? '↑': '↓' }}
        </button>

        <button type="button" class="bg-red-500 h-6 w-6 hover:text-white ml-2"
          @click="$emit('on-remove-data', recordPosition)">X
        </button>
      </td>
      <td v-for="(tData, index) in tableData" :key="index" class="border border-slate-300 text-slate-400  h-9">
        {{ tData }}
      </td>
    </tr>
    <tr v-if="showSubTable">
      <td :colspan="tableData.length + 1" class="pl-4">
        <BaseExpandableTable v-for="([title, dataRecords], index) in kidsData" :key="index" :title="title"
          :rows="dataRecords.records" @on-update-data-table="(row) => onUpdateDataTable(row, dataRecords)" />
      </td>
    </tr>
  </tbody>
</template>

<script lang="ts" setup>
import { type PropType, ref, computed } from 'vue'
import { TableRow } from '../types'
import BaseExpandableTable from './BaseExpandableTable.vue'

const props = defineProps({
  tRow: {
    type: Object as PropType<TableRow>,
    required: true
  },
  recordPosition: {
    type: Number,
    required: true
  }
})

defineEmits(['on-remove-data'])
const showSubTable = ref(false)

const kidsData = computed(() => Object.entries(props.tRow.kids))
const tableData = computed(() => Object.values(props.tRow.data))

const onUpdateDataTable = (row: TableRow[], dataRecords: { records: TableRow[] }) => {
  dataRecords.records = row
}

</script>
