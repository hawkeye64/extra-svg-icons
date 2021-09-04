import { inject, provide, reactive } from 'vue'
import { markdownStoreKey } from './symbols.js'

export function useMarkdownStore () {
  return inject(markdownStoreKey)
}

export function provideMarkdownStore () {
  const store = {
    toc: [],
    title: 'More SVG icons for your Quasar apps'
  }

  provide(
    markdownStoreKey,
    process.env.SERVER === true ? store : reactive(store)
  )
}
