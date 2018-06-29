<template>
  <div>
    <h1>Login</h1>
    <p>
      <button @click="addCredential">
        Set credential
      </button>
      <button @click="removeCredential">
        Remove credential
      </button>
    </p>
    <p>
      <a href="/">Move to home</a>
    </p>
  </div>
</template>

<script>
import Cookies from 'universal-cookie'

let cookies

export default {
  mounted() {
    cookies = new Cookies()
  },
  methods: {
    addCredential() {
      cookies.set('credential', '1')
    },
    removeCredential() {
      cookies.set('credential', '')
    }
  }
}
</script>

<style scoped>
section {
  margin: 16px;
}
</style>

