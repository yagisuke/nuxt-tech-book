<template>
  <div>
    <h1>users/{{ id }}</h1>
    <p v-if="user">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" :alt="user.name" class="avatar">
        {{ user.name }}
      </a>
    </p>
    <ul>
      <li><nuxt-link to="/about">about</nuxt-link></li>
      <li><nuxt-link to="/users">users</nuxt-link></li>
      <li><nuxt-link to="/users/1">users detail</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ params, app }) {
    const { id } = params
    const user = await app.$axios.$get(`https://api.github.com/users/${id}`)
    console.log(user)
    return { id, user }
  }
}
</script>

<style scoped>
.avatar {
  width: 100px;
  height: auto;
  border-radius: 100%;
  background: gray;
}
</style>

