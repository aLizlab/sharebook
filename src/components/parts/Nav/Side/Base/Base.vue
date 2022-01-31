<template>
  <component
    :is="navSideComponent"
    :path="path"
    :list="list"
    class="NavSideBase"
  />
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ContentNavSideType, ContentToc, Content } from '@@types/content'

export default Vue.extend({
  props: {
    type: {
      type: String as PropType<ContentNavSideType>,
      required: false,
      default: ContentNavSideType.book,
    },
    path: {
      type: String,
      required: false,
      default: '',
    },
    list: {
      type: Array as PropType<Content[] | ContentToc[]>,
      required: false,
      default: undefined,
    },
  },
  computed: {
    navSideComponent() {
      switch (this.type) {
        case ContentNavSideType.linkList:
          return 'NavSideLinkList'
        case ContentNavSideType.toc:
          return 'NavSideToc'
        case ContentNavSideType.book:
        default:
          return 'NavSideBook'
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.NavSideBase {
  $root: &;
}
</style>
