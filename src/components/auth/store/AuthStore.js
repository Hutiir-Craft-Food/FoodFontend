import { create } from 'zustand'

const useAuthStore = create(set => ({
  role: 'GUEST',
  user: {},
  setUserRole: () => set(state => ({ role: state.role })),
}))

const roles = ['GUEST', 'BUYER', 'SELLER', 'ADMIN']

export { useAuthStore, roles }
