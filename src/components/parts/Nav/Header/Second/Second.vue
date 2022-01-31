<template>
  <nav class="NavHeaderSecond">
    <ul class="NavHeaderSecond-navList">
      <li
        v-for="navItem in navList"
        :key="navItem.slug"
        class="NavHeaderSecond-navItem"
      >
        <NuxtLink
          :to="localePath(`/${baseSlug}/${navItem.slug}`)"
          class="NavHeaderSecond-link"
        >
          {{ navItem.title }}
          <ImgBase
            v-if="navItem.children"
            :width="20"
            :height="20"
            src="/img/common/icon/arrow-d.svg"
            alt=""
          />
        </NuxtLink>

        <NavHeaderPullDown
          v-if="navItem.children"
          :path="`/${baseSlug}/${navItem.slug}/`"
          :list="navItem.children"
        />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import Vue from 'vue'
import { NavItem } from '@@types/nav'

export default Vue.extend({
  data(): {
    baseSlug: string
    navList: NavItem[]
  } {
    return {
      baseSlug: 'books',
      navList: [],
    }
  },
  async created() {
    const navList = (await this.$content(this.$i18n.locale, this.baseSlug)
      .only(['title', 'slug'])
      .fetch<NavItem>()) as NavItem[]

    navList.forEach(async (navItem, i) => {
      const children = await this.$content(
        this.$i18n.locale,
        this.baseSlug,
        navItem.slug
      )
        .only(['title', 'slug'])
        .fetch<NavItem>()
      if (!Array.isArray(children)) return

      this.$set(this.navList, i, Object.assign(navItem, { children }))
    })

    this.navList = navList as NavItem[]
  },
})
</script>

<style lang="scss" scoped>
.NavHeaderSecond {
  $root: &;

  > #{$root}-navList {
    @include flex();

    > #{$root}-navItem {
      @include flex();
      @include font(null, 500);

      position: relative;

      &:hover {
        > .NavHeaderPullDown {
          display: initial;
        }
      }

      > #{$root}-link {
        @include flex(null, center);
        @include box-pd(10px, 12px, 10px, 12px);
        @include font(18px);

        > .ImgBase {
          @include box(20px);
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
