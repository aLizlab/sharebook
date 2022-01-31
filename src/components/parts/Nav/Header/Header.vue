<template>
  <header class="NavHeader sectionWrap">
    <div class="NavHeader-inner sectionWrap-inner">
      <NavHeaderFirst />

      <NavHeaderSecond />

      <NavHeaderThird />
    </div>
  </header>
</template>

<script lang="ts" setup>
import Vue from 'vue'

export default Vue.extend()
</script>

<style lang="scss" scoped>
.NavHeader {
  $root: &;

  @include bg(rgba($color-bg-white, 0.56));

  backdrop-filter: blur(4px);

  > #{$root}-inner {
    @include flex(null, center);

    > .NavHeaderFirst {
      flex: 1 0 0;
    }

    > .NavHeaderThird {
      @include flex(flex-end);

      flex: 1 0 0;
    }
  }
}
</style>
