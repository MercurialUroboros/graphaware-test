<template>
  <thead>
    <tr>
      <th>
        Actions
      </th>
      <th
        v-for="headerLabel in tableHeaders"
        :key="headerLabel"
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
