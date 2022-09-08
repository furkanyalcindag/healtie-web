import { createStore } from 'vuex'
import auth from '@/service/auth'
import role from '@/service/role'
import category from '@/service/category'
import language from '@/service/language'
import user from '@/service/user'

export default createStore({
  state: {
    sidebarVisible: '',
    sidebarUnfoldable: false,
    toasts: [],
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible
    },
    toggleUnfoldable(state) {
      state.sidebarUnfoldable = !state.sidebarUnfoldable
    },
    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value
    },
    updateToasts(state, toast) {
      state.toasts.push({
        content: toast.content,
        color: toast.color,
        autohide: toast.isautoHided,
        classes: toast.classes,
        delay: toast.delay,
      })
    },
  },
  actions: {
    createToast({ commit }, toast) {
      commit('updateToasts', toast)
    },
  },
  modules: {
    auth,
    role,
    category,
    language,
    user,
  },
})
