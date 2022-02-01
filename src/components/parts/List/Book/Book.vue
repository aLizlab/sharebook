<template>
  <ul :class="{ '-hasNoSide': !hasSide }" class="ListBook">
    <ListBookItem
      v-for="item in list"
      v-bind="item"
      :key="item.title"
      :thumbnail="item.thumbnail || '/ogp.png'"
    />
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ContentPreview } from '@@types/content'

export default Vue.extend({
  props: {
    hasSide: {
      type: Boolean,
      required: false,
      default: true,
    },
    list: {
      type: Array as PropType<ContentPreview[]>,
      required: false,
      default: undefined,
    },
  },
})
</script>

<style lang="scss" scoped>
.ListBook {
  $root: &;

  @include flex(null, null, 24px);

  flex-wrap: wrap;

  > .ListBookItem {
    @include box(calc((100% - 24px) / 2));

    //@include mq(xl) {
    //  @include box(calc((100% - 24px) / 2));
    //}
  }

  &.-hasNoSide {
    > .ListBookItem {
      @include box(calc((100% - 48px) / 3));

      @include mq(lg) {
        @include box(calc((100% - 24px) / 2));
      }
    }
  }
}
</style>
