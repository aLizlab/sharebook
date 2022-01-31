<template>
  <div class="page-books-roomSlug-shelfSlug-bookSlug">
    <PageBase
      type="book"
      :side-path="`/${baseSlug}/`"
      :page="page || {}"
      :github="github"
      :side-list="sideList"
      class="page-books-roomSlug"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Content } from '@@types/content'
import { NavItem } from '@@types/nav'

export default Vue.extend({
  data(): {
    github: string
    shelfSlug: string
    baseSlug: string
    page?: Content
    sideList: NavItem[]
  } {
    return {
      github: '',
      shelfSlug: `books/${this.$route.params.roomSlug}/${this.$route.params.shelfSlug}`,
      baseSlug: `books/${this.$route.params.roomSlug}/${this.$route.params.shelfSlug}/${this.$route.params.bookSlug}`,
      page: undefined,
      sideList: [],
    }
  },
  async created() {
    this.github = `${process.env.npm_package_homepage}/tree/main/src/content/${this.$i18n.locale}/${this.baseSlug}.md`

    const _pageList = (await this.$content(
      this.$i18n.locale,
      this.shelfSlug
    ).fetch<Content>()) as Content[]
    this.sideList =
      ((await this.$content(this.$i18n.locale, this.baseSlug)
        .only(['title', 'slug'])
        .fetch<NavItem>()) as NavItem[]) || []
    if (!Array.isArray(this.sideList)) {
      this.sideList = []
    }
    this.page = _pageList.find(
      (page) => page.slug === this.$route.params.bookSlug
    )

    this.sideList.unshift({
      title: this.page?.title || '',
      slug: '',
    })
    this.sideList.forEach(async (sideItem: NavItem, i: number) => {
      if (!sideItem.slug) return
      const children = await this.$content(
        this.$i18n.locale,
        this.baseSlug,
        sideItem.slug
      )
        .only(['title', 'slug'])
        .fetch<NavItem>()
      if (!Array.isArray(children)) return
      this.$set(this.sideList, i, Object.assign(sideItem, { children }))
    })
  },
})
</script>

<style lang="scss" scoped>
.page-books-roomSlug-shelfSlug-bookSlug {
}
</style>
