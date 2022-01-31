<template>
  <component
    :is="contentMainComponent"
    :has-side="hasSide"
    :page="page"
    :github="github"
    :list="list"
    class="PageMainBase"
  />
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ContentMainType, ContentPreview, Content } from '@@types/content'

export default Vue.extend({
  props: {
    type: {
      type: String as PropType<ContentMainType>,
      required: false,
      default: ContentMainType.page,
    },
    hasSide: {
      type: Boolean,
      required: false,
      default: true,
    },
    list: {
      type: Array as PropType<ContentPreview[]>,
      required: false,
      default: undefined,
    },
    page: {
      type: Object as PropType<Content>,
      required: false,
      default: undefined,
    },
    github: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    contentMainComponent() {
      switch (this.type) {
        case ContentMainType.book:
          return 'PageMainBook'
        case ContentMainType.bookList:
          return 'PageMainBookList'
        case ContentMainType.page:
        default:
          return 'PageMainPage'
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.PageMainBase {
  $root: &;
}
</style>
