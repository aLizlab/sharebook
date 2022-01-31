<template>
  <div class="PageMainBook">
    <NuxtContent :document="page" />
    <ItemGithub :href="github" />
  </div>
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
.PageMainBook {
  .nuxt-content {
    > * {
      @include box-mg(1.2rem);

      &:first-child {
        @include box-mg(0 !important);
      }
    }

    h1 {
      @include box-mg(4.5rem);
      @include font(40px, 700);
    }

    h2 {
      @include box-mg(3.5rem);
      @include font(24px, 700);
    }

    h3 {
      @include box-mg(2.5rem);
      @include font(20px, 700);
    }

    a {
      color: $color-font-accent;
      text-decoration: underline;
    }

    ul,
    ol {
      list-style: revert;
      list-style-position: inside;

      ul,
      ol {
        @include box-pd(null, null, null, 1rem);
      }
    }

    img {
      @include box(100%);
    }

    table {
      @include box(100%);
      @include bg($color-bg-white);

      border: solid 1px;
      border-radius: 6px;
      overflow: hidden;

      thead {
        border-bottom: solid 2px $color-border-primary;
      }

      th,
      td {
        @include box-pd(0.5rem, 0.5rem, 0.5rem, 0.5rem);

        border: solid 1px $color-border-primary;
      }
    }

    .contains-task-list {
      list-style: none;
    }

    .nuxt-content-highlight {
      position: relative;

      .filename {
        @include box-pd(2px, 4px, 2px, 4px);
        @include font(14px);
        @include bg($color-bg-white);

        position: absolute;
        top: 4px;
        right: 4px;
        border-radius: 6px;
      }

      pre {
        @include bg($color-bg-code);

        border-radius: 6px;
      }
    }

    .footnotes {
      @include box-mg(4rem);

      > ol {
        @include box-mg(1rem);
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.PageMainBook {
  $root: &;

  > .ItemGithub {
    @include box-mg(16px);
  }
}
</style>
