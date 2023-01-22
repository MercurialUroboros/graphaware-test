<template>
  <div>
    <div
      v-if="title"
      class="text-white"
    >{{ title }}</div>
    <table class="table-fixed w-full border-collapse border border-slate-300">
      <!-- BaseTableHead is outside of the loop because we can assume we don't have to iterate the headers -->
      <BaseTableHead
        v-if="iRows.length > 0"
        :table-headers="getDataTableHeaders(0)"
      />
      <tbody>
        <BaseTableData
          v-for="(rowData, index) in iRows"
          :key="rowData.key"
          :t-row="rowData"
          :record-position="index"
          @on-remove-data="onRemoveData"
        />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import BaseTableHead from './BaseTableHead.vue'
import BaseTableData from './BaseTableData.vue'
import { onMounted, ref, type PropType } from 'vue'
import type { TableRow } from '../types'

const props = defineProps({
  title: {
    type: String,
    required: false
  },
  rows: {
    type: Array as PropType<TableRow[]>,
    required: false,
    default: () => []
  }
})

const iRows = ref(props.rows)

onMounted(() => {
  // Using :key with an index on v-for can cause unpredicatabe behaviours
  // Hence assigning a custom key to the array
  iRows.value = iRows.value.map((row, index) => ({
    ...row,
    key: index
  }))
})

const emits = defineEmits(['on-update-data-table'])

const getDataTableHeaders = (index: number) => Object.keys(iRows.value[index].data)

const onRemoveData = (recordPosition: number) => {
  iRows.value = iRows.value.filter((_, index) => index !== recordPosition)
  emits('on-update-data-table', iRows.value)
}

</script>
