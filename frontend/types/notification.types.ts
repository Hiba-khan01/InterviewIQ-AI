import type { NotificationType } from './api.types'

export interface Notification {
  _id: string
  userId: string
  title: string
  message: string
  type: NotificationType
  read: boolean
  createdAt: string
}
