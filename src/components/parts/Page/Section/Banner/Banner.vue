<template>
  <section class="PageSectionBanner sectionWrap">
    <div class="PageSectionBanner-inner sectionWrap-inner">
      <NuxtContent :document="page" />
      <ItemGithub :href="github" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Content } from '@@types/content'

export default Vue.extend({
  props: {
    page: {
      type: Object as PropType<Content>,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss">
.PageSectionBanner {
  .nuxt-content {
    h1 {
      @include font(64px, 700, 1.2);
    }

    p {
      @include box-mg(16px);
    }
  }
}
</style>

<style lang="scss" scoped>
.PageSectionBanner {
  $root: &;

  @include flex(null, initial);
  @include box-pd(64px, null, 40px);
  @include bg($color-bg-white);

  min-height: $section-benner-height;

  > #{$root}-inner {
    > .ItemGithub {
      @include box-mg(16px);
    }
  }
}
</style>
