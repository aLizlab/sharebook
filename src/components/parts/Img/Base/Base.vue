<template>
  <picture class="ImgBase">
    <source v-for="(source, i) in sources" :key="i" v-bind="source" />
    <img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      loading="lazy"
      class="ImgBase-img"
    />
  </picture>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ImgSource } from '@@types/img'
// import { ImgFormat, ImgFit } from '@@types/img'

export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    sizes: {
      type: String,
      required: false,
      default: undefined,
    },
    sources: {
      type: Array as PropType<ImgSource[]>,
      required: false,
      default: undefined,
    },
    // format: {
    //   type: String as PropType<ImgFormat>,
    //   required: false,
    //   default: undefined,
    // },
    // fit: {
    //   type: String as PropType<ImgFit>,
    //   required: false,
    //   default: ImgFit.cover,
    // },
  },
})
</script>

<style lang="scss" scoped>
.ImgBase {
  $root: &;

  @include flex();

  > #{&}-img {
    @include box(100%, 100%);

    object-fit: cover;
  }
}
</style>
