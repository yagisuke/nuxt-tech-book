<template>
  <div>
    <h1>users/{{ id }}</h1>
    <a
      v-if="user"
      :href="user.html_url"
      target="_blank"
      class="user"
      >
      <img
        :src="user.avatar_url"
        :alt="user.name + 'さんのアバター画像'"
        class="user-avatar"
      >
      <span class="user-name">{{ user.name }}</span>
    </a>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `about: ${this.$route.params.id}` 
    }
  },
  async asyncData({ params, store }) {
    const { id } = params
    await store.dispatch('github/getUser', { id })
    return { id }
  },
  computed: {
    user() {
      return this.$store.getters['github/user']
    }
  }
}
</script>

<style scoped>
.user {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 24px 0;
  padding: 24px 0;
  text-decoration: none;
  border-top: 10px solid #ccc;
  border-bottom: 10px solid #ccc;
}

.user-avatar {
  width: 100px;
  height: auto;
  margin: 0 24px;
  border-radius: 100%;
  background: gray;
}

.user-name {
  font-size: 30px;
  font-weight: 900;
  color: #ccc;
}
</style>

