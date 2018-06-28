<template>
  <div class="container">
    <template v-if="error.statusCode === 404">
      <h1>404 not found</h1>
    </template>
    <template v-else>
      <h1>Error</h1>
      <p>{{ error.message }}</p>
    </template>
    <nuxt-link to="/">Back to home</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
