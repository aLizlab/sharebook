<template>
  <ul class="NavHeaderPullDown">
    <li v-for="item in list" :key="item.slug" class="NavHeaderPullDown-page">
      <NuxtLink
        :to="needLocalePath ? localePath(path + item.slug) : path + item.slug"
        class="NavHeaderPullDown-link"
      >
        {{ item.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import Vue, { PropType } from 'vue'
import { NavItem } from '@@types/nav'

export default Vue.extend({
  props: {
    path: {
      type: String,
      required: false,
      default: '',
    },
    needLocalePath: {
      type: Boolean,
      required: false,
      default: true,
    },
    list: {
      type: Array as PropType<NavItem[]>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.NavHeaderPullDown {
  $root: &;

  @include box-pd(4px, null, 4px);
  @include bg($color-bg-white);

  border-radius: 6px;
  box-shadow: $shadow-pullDown;

  > #{$root}-page {
    > #{$root}-link {
      @include flex();
      @include box-pd(8px, 16px, 8px, 16px);

      white-space: nowrap;
    }
  }
}
</style>
