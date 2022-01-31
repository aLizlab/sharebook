<template>
  <li class="NavSideLinkListItem">
    <div class="NavSideLinkListItem-linkWrap">
      <NuxtLink
        :to="localePath(path + slug)"
        :class="{
          '-isAll': !slug,
          'nuxt-link-exact-active':
            !slug && !$route.params.roomSlug && !$route.params.sectionSlug,
        }"
        class="NavSideLinkListItem-link"
      >
        {{ title }}
      </NuxtLink>
      <button
        v-if="children"
        :class="{ '-isActive': isActive }"
        class="NavSideLinkListItem-moreBtn"
        @click="isActive = !isActive"
      >
        <ImgBase
          :width="20"
          :height="20"
          src="/img/common/icon/arrow-d.svg"
          alt=""
        />
      </button>
    </div>

    <div v-show="isActive" class="NavSideLinkListItem-moreWrap">
      <ul class="NavSideLinkListItem-moreList">
        <li
          v-for="child in children"
          :key="child.slug"
          class="NavSideLinkListItem-moreItem"
        >
          <NuxtLink
            :to="localePath(path + slug + '/' + child.slug)"
            class="NavSideLinkListItem-moreLink"
          >
            {{ child.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { NavItem } from '@@types/nav'

export default Vue.extend({
  props: {
    path: {
      type: String,
      required: false,
      default: '',
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    children: {
      type: Array as PropType<NavItem[]>,
      required: false,
      default: undefined,
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
})
</script>

<style lang="scss" scoped>
.NavSideLinkListItem {
  $root: &;

  > #{$root}-linkWrap {
    @include font(14px, 700);

    position: relative;

    > #{$root}-link {
      @include box-pd(4px, 12px, 4px, 12px);

      display: block;
      border-radius: 6px;

      &.nuxt-link-active {
        @include bg(rgba($color-bg-white, 0.56));
      }

      &.-isAll {
        @include bg(transparent);
      }

      &.nuxt-link-exact-active {
        @include bg($color-bg-white);
      }

      &:hover {
        @include bg(rgba($color-bg-white, 0.88));
      }
    }

    > #{$root}-moreBtn {
      @include box-pd(2px, 2px, 2px, 2px);
      @include bg($color-bg-white);

      position: absolute;
      right: 4px;
      bottom: 50%;
      transform: translateY(50%);
      border-radius: 6px;

      > .ImgBase {
        @include box(20px);
      }

      &.-isActive {
        > .ImgBase {
          transform: rotate(180deg);
        }
      }
    }
  }

  > #{$root}-moreWrap {
    > #{$root}-moreList {
      > #{$root}-moreItem {
        > #{$root}-moreLink {
          @include box-pd(4px, 12px, 4px, 12px);
          @include font(14px, 500);

          display: block;
          border-radius: 6px;

          &.nuxt-link-exact-active {
            @include bg($color-bg-white);
          }

          &:hover {
            @include bg(rgba($color-bg-white, 0.56));
          }
        }
      }
    }
  }
}
</style>
