export const home = {
  title: 'title <1>Cloud</1>',
  description: 'description',
} as const

export const translation = {
  home: 'home',
  about: 'about',
  service: 'service',
  blog: 'blog',
  document: 'document',
  signIn: 'sign in',
  dashboard: 'dashboard',
  more: 'more',
} as const

export const sidebar = {
  vmInstance: 'VM Instance',
  vmTemplate: 'VM Template',
} as const

type GetTokenType<T extends Record<string | number, string>> = Record<T[keyof T], string>

export type HomeTokenType = GetTokenType<typeof home>
export type TranslationTokenType = GetTokenType<typeof translation>
export type SidebarTokenType = GetTokenType<typeof sidebar>
