export interface Data {
  name: string
  timestamp: number
  position: 'top' | 'center' | 'bottom'
}

export interface Payload {
  payload: Record<string, string[]>
}

export interface SearchPayload {
  trackingRecordId: string
  photo: string
  timestamp: number
}
