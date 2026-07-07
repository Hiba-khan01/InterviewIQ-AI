// User API service stubs

import api from '@/lib/api'
import type { APIResponse } from '@/types/api.types'
import type { User, UpdateProfilePayload } from '@/types/user.types'

export const userService = {
  getMe: async (token: string): Promise<APIResponse<User>> => {
    const { data } = await api.get('/users/me', {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },

  updateProfile: async (
    payload: UpdateProfilePayload,
    token: string,
  ): Promise<APIResponse<User>> => {
    const { data } = await api.put('/users/profile', payload, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },

  deleteAccount: async (token: string): Promise<APIResponse<null>> => {
    const { data } = await api.delete('/users/account', {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  },
}
