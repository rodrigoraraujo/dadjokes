<template>
  <div>
    <h2>Welcome to the best corny dad jokes app on the web</h2>
  </div>
</template>

<script>
import head from '~/mixins/head';

export default {
  mixins: [head],
  head() {
    return {
      title: 'Welcome To Dad Jokes'
    };
  }
};
</script>
