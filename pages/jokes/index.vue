<template>
  <div>
    <div v-for="joke in jokes" :key="joke.id">
      <p>{{ joke.joke }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      jokes: []
    };
  },
  async created() {
    await this.getJokes();
    this.jokes = this.$store.state.jokes.jokes;
  },
  methods: {
    ...mapActions('jokes', ['getJokes'])
  }
};
</script>

<style>
</style>
