import { IContentDocumentBase } from '@nuxt/content/types/content'

export const ContentType = {
  page: 'page',
  bookList: 'book-list',
  book: 'book',
} as const

export const ContentNavSideType = {
  linkList: 'link-list',
  book: 'book',
  toc: 'toc',
} as const

export const ContentMainType = {
  page: 'page',
  bookList: 'book-list',
  book: 'book',
} as const

export type ContentType = typeof ContentType[keyof typeof ContentType]
export type ContentNavSideType =
  typeof ContentNavSideType[keyof typeof ContentNavSideType]
export type ContentMainType =
  typeof ContentMainType[keyof typeof ContentMainType]

export interface ContentToc {
  depth: number
  id: string
  text: string
}

export interface ContentPreview {
  title: string
  slug: string
  path: string
  thumbnail?: string
  description: string
}

export interface Content extends ContentPreview, IContentDocumentBase {
  type: ContentType
  tags: string[]
}
