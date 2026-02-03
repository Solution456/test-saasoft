import type { AccountTag } from '../types'

export function transformTagsToString(tags: AccountTag[]) {
  return tags.map((tag) => tag.text).join('; ')
}

export function transformTagsFromString(tags: string) {
  const _tags = tags.split('; ')

  if (!tags.length)
    return [
      {
        text: ''
      }
    ]
  return _tags.map((tag) => ({ text: tag }))
}
