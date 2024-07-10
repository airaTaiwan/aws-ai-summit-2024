export interface Data {
  name: string
  timestamp: number
  position: 'top' | 'bottom'
}

export interface Payload {
  cameraId: string
  name: string
}

export interface SearchPayload {
  trackingRecordId: string
  photo: string
  timestamp: number
}
