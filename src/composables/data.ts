import type { Data } from '~/types'

export const data = ref<Map<string, Data>>(new Map()
  .set('camera1', {
    name: 'camera1',
    timestamp: 0,
    position: 'top',
  })
  .set('camera2', {
    name: 'camera2',
    timestamp: Date.now(),
    position: 'bottom',
  })
  .set('camera3', {
    name: 'camera3',
    timestamp: Date.now(),
    position: 'bottom',
  })
  .set('camera4', {
    name: 'camera4',
    timestamp: 0,
    position: 'top',
  })
  .set('camera5', {
    name: 'camera5',
    timestamp: Date.now(),
    position: 'bottom',
  })
  .set('camera6', {
    name: 'camera6',
    timestamp: 0,
    position: 'top',
  })
  .set('camera7', {
    name: 'camera7',
    timestamp: 0,
    position: 'bottom',
  }),
)
