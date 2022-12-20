export const state = () => ({
  error: null
})

export const mutations = {
  error (state, error) {
    state.error = error
  }
}
