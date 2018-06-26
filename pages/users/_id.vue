<template>
  <div>
    <h1>users/{{ id }}</h1>
    <ul>
      <li><nuxt-link to="/about">about</nuxt-link></li>
      <li><nuxt-link to="/users">users</nuxt-link></li>
      <li><nuxt-link to="/users/1">users detail</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    const { id } = params
    return {
      id
    }
  }
}
</script>
