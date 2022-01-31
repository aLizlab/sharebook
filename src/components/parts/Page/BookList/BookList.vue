<template>
  <div class="PageBookList">
    <PageSectionBanner :page="page" :github="github" />

    <div class="PageBookList-cont sectionWrap">
      <div class="PageBookList-cont-inner sectionWrap-inner">
        <NavSideBase
          v-if="sideList"
          :path="sidePath"
          :list="sideList"
          type="link-list"
        />

        <PageMainBase
          :has-side="!!sideList"
          :list="bookList"
          type="book-list"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ContentPreview, Content } from '@@types/content'
import { NavItem } from '@@types/nav'

export default Vue.extend({
  props: {
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
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.PageBookList {
  $root: &;

  > #{$root}-cont {
    > #{$root}-cont-inner {
      @include flex(null, flex-start, 24px);

      > .NavSideBase {
        @include box-pd(24px);

        position: sticky;
        top: $header-height;
        flex: 0 0 184px;

        @include mq(lg) {
          display: none;
        }
      }

      > .PageMainBase {
        @include box-pd(24px);

        flex: 1;
      }
    }
  }
}
</style>
