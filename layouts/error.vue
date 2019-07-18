<template>
  <h1 v-if="error.statusCode === 404">
    Page not found!
  </h1>
</template>

<script>
export default {
  props: {
    error: {
      type: Function,
      default: null
    }
  }
};
</script>

<style>
</style>
