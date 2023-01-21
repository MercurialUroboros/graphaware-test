<template>
  <thead>
    <tr>
      <th class="border
        border-slate-300
        font-semibold
        text-slate-900
        text-center">
        Actions
      </th>
      <th
        v-for="headerLabel in tableHeaders"
        :key="headerLabel"
        class="border border-slate-300 font-semibold text-slate-900 text-center"
      >
        {{ headerLabel }}
      </th>
    </tr>
  </thead>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue'

defineProps({
  tableHeaders: {
    type: Array as PropType<string[]>,
    required: true
  }
})

</script>
