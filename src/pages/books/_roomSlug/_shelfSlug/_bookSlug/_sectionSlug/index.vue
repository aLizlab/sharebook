<template>
  <PageBase
    type="book"
    :side-path="`/${bookSlug}/`"
    :page="page || {}"
    :github="github"
    :side-list="sideList"
    class="page-books-roomSlug-shelfSlug-bookSlug-sectionSlug"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { Content } from '@@types/content'
import { NavItem } from '@@types/nav'

export default Vue.extend({
  data(): {
    github: string
    shelfSlug: string
    bookSlug: string
    baseSlug: string
    page?: Content
    sideList: NavItem[]
  } {
    return {
      github: '',
      shelfSlug: `books/${this.$route.params.roomSlug}/${this.$route.params.shelfSlug}`,
      bookSlug: `books/${this.$route.params.roomSlug}/${this.$route.params.shelfSlug}/${this.$route.params.bookSlug}`,
      baseSlug: `books/${this.$route.params.roomSlug}/${this.$route.params.shelfSlug}/${this.$route.params.bookSlug}/${this.$route.params.sectionSlug}`,
      page: undefined,
      sideList: [],
    }
  },
  async created() {
    this.github = `${process.env.npm_package_homepage}/tree/main/src/content/${this.$i18n.locale}/${this.baseSlug}.md`

    const _bookList = (await this.$content(this.$i18n.locale, this.shelfSlug)
      .only(['title', 'slug'])
      .fetch<NavItem>()) as NavItem[]
    const _pageList = (await this.$content(
      this.$i18n.locale,
      this.bookSlug
    ).fetch<Content>()) as Content[]
    this.sideList =
      ((await this.$content(this.$i18n.locale, this.bookSlug)
        .only(['title', 'slug'])
        .fetch<NavItem>()) as NavItem[]) || []
    if (!Array.isArray(this.sideList)) {
      this.sideList = []
    }
    const book = _bookList.find(
      (page) => page.slug === this.$route.params.bookSlug
    )
    this.page = _pageList.find(
      (page) => page.slug === this.$route.params.sectionSlug
    )

    this.sideList.unshift({
      title: book?.title || '',
      slug: '',
    })
    this.sideList.forEach(async (sideItem: NavItem, i: number) => {
      if (!sideItem.slug) return
      const children = await this.$content(
        this.$i18n.locale,
        this.bookSlug,
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
.page-books-roomSlug-shelfSlug-bookSlug-sectionSlug {
}
</style>
