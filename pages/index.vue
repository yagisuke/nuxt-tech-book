<template>
  <div>
    <h1>HOME</h1>
    <a
      v-for="user in users"
      :key="user.id"
      :href="'https://qiita.com/' + user.id"
      target="_blank"
      class="user"
      >
      <img
        :src="user.profile_image_url"
        :alt="user.id + 'さんのプロフィール画像'"
        class="user-avatar"
      >
      <p class="user-name">
        {{ user.id }}
        <small class="user-description">
          {{ user.description }}
        </small>
      </p>
    </a>
    <div class="bottom-link">
      <nuxt-link to="/login">
        move to login >
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const users = await app.$axios.$get('/users')
    return { users }
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

.user-description {
  display: block;
  color: gray;
  font-size: 14px;
}

.bottom-link {
  margin: 16px;
}
</style>
