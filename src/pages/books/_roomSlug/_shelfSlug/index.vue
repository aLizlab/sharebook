<template>
  <PageBase
    type="book-list"
    :side-path="`/${booksSlug}/`"
    :page="page || {}"
    :github="github"
    :side-list="sideList"
    :book-list="bookList"
    class="page-books-roomSlug-shelfSlug"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { Content, ContentPreview, ContentType } from '@@types/content'
import { NavItem } from '@@types/nav'

export default Vue.extend({
  data(): {
    github: string
    booksSlug: string
    roomSlug: string
    baseSlug: string
    page?: Content
    sideList: NavItem[]
    bookList: ContentPreview[]
  } {
    return {
      github: '',
      booksSlug: 'books',
      roomSlug: `books/${this.$route.params.roomSlug}`,
      baseSlug: `books/${this.$route.params.roomSlug}/${this.$route.params.shelfSlug}`,
      page: undefined,
      sideList: [],
      bookList: [],
    }
  },
  async created() {
    this.github = `${process.env.npm_package_homepage}/tree/main/src/content/${this.$i18n.locale}/${this.baseSlug}.md`

    const _pageList = (await this.$content(
      this.$i18n.locale,
      this.roomSlug
    ).fetch<Content>()) as Content[]
    this.sideList = (await this.$content(this.$i18n.locale, this.booksSlug)
      .only(['title', 'slug'])
      .fetch<NavItem>()) as NavItem[]
    this.bookList = (await this.$content(this.$i18n.locale, this.baseSlug, {
      deep: true,
    })
      .where({ type: ContentType.book })
      .only(['title', 'slug', 'thumbnail', 'description', 'path'])
      .fetch<ContentPreview>()) as ContentPreview[]

    this.page = _pageList.find(
      (page) => page.slug === this.$route.params.shelfSlug
    )

    this.sideList.unshift({
      title: 'All',
      slug: '',
    })
    this.sideList.forEach(async (sideItem: NavItem, i: number) => {
      if (!sideItem.slug) return
      const children = await this.$content(
        this.$i18n.locale,
        this.booksSlug,
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
.page-books-roomSlug-shelfSlug {
}
</style>
