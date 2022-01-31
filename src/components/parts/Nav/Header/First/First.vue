<template>
  <div class="NavHeaderFirst">
    <NuxtLink :to="localePath('/')" class="NavHeaderFirst-link">
      <ImgBase
        :width="160"
        :height="44"
        src="/img/ShareBook-logo.svg"
        alt="ShareBook"
      />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import Vue from 'vue'

export default Vue.extend()
</script>

<style lang="scss" scoped>
.NavHeaderFirst {
  $root: &;

  > #{$root}-link {
    @include box(160px);

    display: block;
  }
}
</style>
