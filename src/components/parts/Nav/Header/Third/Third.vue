<template>
  <div class="NavHeaderThird">
    <ul class="NavHeaderThird-menuList">
      <!--
      <li class="NavHeaderThird-menuItem">
        <div class="NavHeaderThird-link">
          <ImgBase
            :width="28"
            :height="28"
            src="/img/common/icon/translate.svg"
            alt="翻訳"
          />
          <ImgBase
            :width="20"
            :height="20"
            src="/img/common/icon/arrow-d.svg"
            alt=""
            class="-isArrow"
          />
        </div>

        <NavHeaderPullDown :needLocalePath="false" :list="langList" />
      </li>
      -->
      <li class="NavHeaderThird-menuItem">
        <a
          href="https://github.com/aLizlab/sharebook/"
          target="_blank"
          rel="noopener noreferrer"
          class="NavHeaderThird-link"
        >
          <ImgBase
            :width="28"
            :height="28"
            src="/img/common/icon/github.svg"
            alt="GitHub"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import Vue from 'vue'
import { NavItem } from '@@types/nav'

export default Vue.extend({
  computed: {
    langList(): NavItem[] {
      const langList: NavItem[] = []

      this.$i18n.locales.forEach((lang: any) => {
        langList.push({
          title: lang.name,
          slug: this.switchLocalePath(lang.code),
        })
      })

      return langList
    },
  },
})
</script>

<style lang="scss" scoped>
.NavHeaderThird {
  $root: &;

  > #{$root}-menuList {
    @include flex(flex-end);

    transform: translateX(8px);

    > #{$root}-menuItem {
      @include flex();

      position: relative;

      &:hover {
        > .NavHeaderPullDown {
          display: initial;
        }
      }

      > #{$root}-link {
        @include flex(null, center);
        @include box-pd(10px, 8px, 10px, 8px);

        > .ImgBase {
          @include box(28px);

          &.-isArrow {
            @include box(20px);
          }
        }
      }

      > .NavHeaderPullDown {
        display: none;
        position: absolute;
        top: 100%;
        right: 50%;
        transform: translateX(50%);
      }
    }
  }
}
</style>
