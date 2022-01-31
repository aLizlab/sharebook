<template>
  <aside class="NavSideLinkList">
    <ul class="NavSideLinkList-linkList">
      <NavSideLinkListItem
        v-for="item in list"
        v-bind="item"
        :key="item.slug"
        :path="path"
      />
    </ul>
  </aside>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { NavItem } from '@@types/nav'

export default Vue.extend({
  props: {
    path: {
      type: String,
      required: false,
      default: '',
    },
    list: {
      type: Array as PropType<NavItem[]>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.NavSideLinkList {
  $root: &;

  > #{$root}-linkList {
    > .NavSideLinkListItem {
      + * {
        @include box-mg(12px);
      }
    }
  }
}
</style>
