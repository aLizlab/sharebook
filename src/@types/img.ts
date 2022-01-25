export const ImgMedia = {
  apng: 'image/apng',
  avif: 'image/avif',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  webp: 'image/webp',
} as const

export type ImgMedia = typeof ImgMedia[keyof typeof ImgMedia]

export interface ImgSource {
  srcset: string
  media?: string
  type?: ImgMedia
}

export interface Img {
  src: string
  alt: string
  width: number
  height: number
  sources?: ImgSource[]
}
