<template>
  <div>
    <div class="text-white">{{ title }}</div>
    <table v-for="(rowData, index) in iRows" :key="index"
      class="table-fixed w-full border-collapse border border-slate-300">
      <BaseTableHead :table-headers="getDataTableHeaders(index)" />
      <BaseTableData :t-row="rowData" :record-position="index" @on-remove-data="onRemoveData" />
    </table>
  </div>
</template>

<script lang="ts" setup>
import BaseTableHead from './BaseTableHead.vue'
import BaseTableData from './BaseTableData.vue'
import { TableRow } from '../types'
import { ref, type PropType } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  rows: {
    type: Array as PropType<TableRow[]>,
    required: false,
    default: () => []
  }
})

const emits = defineEmits(['on-update-data-table'])
const iRows = ref(props.rows)

const getDataTableHeaders = (index: number) => Object.keys(iRows.value[index].data)

const onRemoveData = (recordPosition: number) => {
  iRows.value = iRows.value.filter((_, index) => index !== recordPosition)
  emits('on-update-data-table', iRows.value)
}

</script>
