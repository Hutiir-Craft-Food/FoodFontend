import { create } from 'zustand'

const roles = ['GUEST', 'BUYER', 'SELLER', 'ADMIN']
const actions = {
  LOGIN: 'login',
  REGISTER: 'register',
}

const useAuthStore = create((set) => ({
  role: 'GUEST',
  user: {},
  showAuthWidget: false,
  action: actions.LOGIN,
  setAction: (newAction) => set((state) => ({ action: newAction })),
  setShowAuthWidget: (newShowAuthWidget) =>
    set((state) => ({ showAuthWidget: newShowAuthWidget })),
  setUserRole: (newRole) => set((state) => ({ role: newRole })),
}))

export { useAuthStore, roles, actions }
