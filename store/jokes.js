export const state = () => ({
  jokes: []
});

export const mutations = {
  getJokes(state, payload) {
    state.jokes = payload;
  }
};

export const actions = {
  async getJokes({ commit }, payload) {
    this.$axios.setHeader('Accept', 'application/json');
    try {
      const outcome = await this.$axios.$get('/api/search');
      commit('getJokes', outcome.results);
    } catch (err) {
      console.log(err);
    }
  }
};
