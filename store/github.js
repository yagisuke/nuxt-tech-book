export const state = () => ({
  user: null
})

export const mutations = {
  saveUser(state, { user }) {
    state.user = user
  }
}

export const actions = {
  async getUser({ commit }, { id }) {
    try {
      const user = await this.$axios.$get(
        `https://api.github.com/users/${id}`
      )
      commit('saveUser', { user })
    } catch(e) {
      return Promise.reject(e)
    }
  }
}

export const getters = {
  user: state => state.user
}
