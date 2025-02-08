import { create } from 'zustand'

const useAuthStore = create(set => ({
  role: 'GUEST',
  email: '',
  password: '',
  setUserRole: () => set(state => ({ role: state.role })),
}))

const roles = ['GUEST', 'USER', 'BUYER', 'SELLER', 'ADMIN']

export { useAuthStore, roles }
