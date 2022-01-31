export const ImgMedia = {
  avif: 'image/avif',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  webp: 'image/webp',
} as const

export const ImgFormat = {
  jpg: 'jpg',
  png: 'png',
  git: 'git',
  svg: 'svg',
  webp: 'webp',
} as const

export const ImgFit = {
  cover: 'cover',
  contain: 'contain',
  fill: 'fill',
  inside: 'inside',
  outside: 'outside',
} as const

export type ImgMedia = typeof ImgMedia[keyof typeof ImgMedia]
export type ImgFormat = typeof ImgFormat[keyof typeof ImgFormat]
export type ImgFit = typeof ImgFit[keyof typeof ImgFit]

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
