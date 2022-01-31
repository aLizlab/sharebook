<template>
  <NuxtPicture
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :sizes="sizes"
    :format="format"
    :fit="fit"
    class="ImgBase"
  />
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ImgFormat, ImgFit } from '@@types/img'

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
    format: {
      type: String as PropType<ImgFormat>,
      required: false,
      default: undefined,
    },
    fit: {
      type: String as PropType<ImgFit>,
      required: false,
      default: ImgFit.cover,
    },
  },
})
</script>

<style lang="scss" scoped>
.ImgBase {
}
</style>
