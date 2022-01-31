<template>
  <component
    :is="pageComponent"
    :side-path="sidePath"
    :page="page"
    :github="github"
    :side-list="sideList"
    :book-list="bookList"
    class="PageBase"
  />
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ContentType, ContentPreview, Content } from '@@types/content'
import { NavItem } from '@@types/nav'

export default Vue.extend({
  props: {
    type: {
      type: String as PropType<ContentType>,
      required: false,
      default: ContentType.page,
    },
    sidePath: {
      type: String,
      required: false,
      default: '',
    },
    page: {
      type: Object as PropType<Content>,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    sideList: {
      type: Array as PropType<NavItem[]>,
      required: false,
      default: undefined,
    },
    bookList: {
      type: Array as PropType<ContentPreview[]>,
      required: false,
      default: undefined,
    },
  },
  computed: {
    pageComponent() {
      switch (this.type) {
        case ContentType.page:
          return 'PagePage'
        case ContentType.bookList:
          return 'PageBookList'
        case ContentType.book:
        default:
          return 'PageBook'
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.PageBase {
  $root: &;

  @include box-pd(null, null, 64px);
}
</style>
