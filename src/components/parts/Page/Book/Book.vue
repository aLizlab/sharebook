<template>
  <div class="PageBook">
    <div class="PageBook-cont sectionWrap">
      <div class="PageBook-cont-inner sectionWrap-inner">
        <NavSideBase
          v-if="sideList"
          :path="sidePath"
          :list="sideList"
          type="link-list"
        />

        <PageMainBase :page="page" :github="github" type="book" />

        <NavSideBase :list="page.toc" type="toc" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Content } from '@@types/content'
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
  },
})
</script>

<style lang="scss" scoped>
.PageBook {
  $root: &;

  > #{$root}-cont {
    > #{$root}-cont-inner {
      @include flex(null, flex-start, 24px);

      @include mq(lg) {
        @include flex(null, null, 20px);
      }

      > .NavSideLinkList {
        @include box-pd(24px);

        position: sticky;
        top: $header-height;
        flex: 0 0 224px;

        @include mq(lg) {
          flex: 0 0 168px;
        }

        @include mq(md) {
          display: none;
        }
      }

      > .PageMainBase {
        @include box-pd(24px);

        flex: 1;
      }

      > .NavSideToc {
        @include box-pd(24px);

        position: sticky;
        top: $header-height;
        flex: 0 0 224px;

        @include mq(lg) {
          flex: 0 0 168px;
        }

        @include mq(md) {
          display: none;
        }
      }
    }
  }
}
</style>
