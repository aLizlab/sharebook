<template>
  <div class="PageMainBookList">
    <ListBook :has-side="hasSide" :list="list" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ContentPreview } from '@@types/content'

export default Vue.extend({
  props: {
    hasSide: {
      type: Boolean,
      required: false,
      default: true,
    },
    list: {
      type: Array as PropType<ContentPreview[]>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.PageMainBookList {
  $root: &;
}
</style>
