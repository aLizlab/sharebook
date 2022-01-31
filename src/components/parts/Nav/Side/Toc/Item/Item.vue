<template>
  <li class="NavSideLinkListItem">
    <a
      :href="`#${id}`"
      :class="`-isDepth${depth}`"
      class="NavSideLinkListItem-link"
    >
      {{ text }}
    </a>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    depth: {
      type: Number,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.NavSideLinkListItem {
  $root: &;

  > #{$root}-link {
    @include box-pd(4px, 12px, 4px, 12px);
    @include font(14px, 500);

    display: block;
    border-radius: 6px;

    &.-isDepth3 {
      @include box-mg(null, null, null, 1rem);
    }

    &.-isDepth4 {
      @include box-mg(null, null, null, 2rem);
    }

    &.-isDepth5 {
      @include box-mg(null, null, null, 3rem);
    }

    &.-isDepth6 {
      @include box-mg(null, null, null, 4rem);
    }

    &:hover {
      @include bg(rgba($color-bg-white, 0.88));
    }
  }
}
</style>
