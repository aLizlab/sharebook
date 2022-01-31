<template>
  <aside class="NavSideToc">
    <ul class="NavSideToc-linkList">
      <NavSideTocItem v-for="item in list" v-bind="item" :key="item.id" />
    </ul>
  </aside>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ContentToc } from '@@types/content'

export default Vue.extend({
  props: {
    list: {
      type: Array as PropType<ContentToc[]>,
      required: false,
      default: undefined,
    },
  },
})
</script>

<style lang="scss" scoped>
.NavSideToc {
  $root: &;

  > #{$root}-linkList {
    > .NavSideTocItem {
      + * {
        @include box-mg(12px);
      }
    }
  }
}
</style>
