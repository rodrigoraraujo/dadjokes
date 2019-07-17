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
    const outcome = await this.$axios.get('https://icanhazdadjoke.com/search');

    commit('getJokes', outcome.results);
  }
};
