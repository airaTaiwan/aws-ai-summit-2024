import type { Data } from '~/types'

export const isVisited = ref(false)
export const initialData = shallowRef<Map<string, Data>>(new Map())
export const data = shallowRef<Map<string, Data>>(new Map())
export const zoomRatio = ref(0)
