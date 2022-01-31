<template>
  <a :href="href" target="_blank" rel="noopener noreferrer" class="ItemGithub">
    <ImgBase :width="18" :height="18" src="/img/common/icon/edit.svg" alt="" />
    Edit this page on GitHub
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    href: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.ItemGithub {
  @include flex(null, center);
  @include font(14px);

  color: $color-secondary;

  > .ImgBase {
    @include box(18px);
    @include box-mg(null, 2px);

    opacity: 0.4;
  }
}
</style>
