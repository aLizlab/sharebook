<template>
  <li class="ListBookItem">
    <NuxtLink :to="link" class="ListBookItem-link">
      <ImgBase
        :src="thumbnail"
        :width="484"
        :height="242.29"
        :alt="title"
        format="webp"
      />
      <p class="ListBookItem-ttl">
        {{ title }}
      </p>
    </NuxtLink>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  computed: {
    link() {
      return this.localePath(this.path.replace(`/${this.$i18n.locale}`, ''))
    },
  },
})
</script>

<style lang="scss" scoped>
.ListBookItem {
  $root: &;

  > #{$root}-link {
    @include bg($color-bg-white);

    display: block;
    border-radius: 8px;
    overflow: hidden;

    > .ImgBase {
      @include box(100%);
    }

    > #{$root}-ttl {
      @include box-pd(8px, 16px, 8px, 16px);
      @include font(null, 700, 1.2);
    }
  }
}
</style>
