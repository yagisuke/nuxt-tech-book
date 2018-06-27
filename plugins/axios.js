import { GITHUB_TOKEN } from '../config/github'

export default function({ $axios }) {
  $axios.onRequest(config => {
    if(config.url.indexOf('api.github.com') + 1) {
      config.headers.Authorization = 'token ' + GITHUB_TOKEN
      // GITHUB_TOKEN: https://github.com/settings/tokensにて、repoにcheckをいれて生成したtoken.
    }
  })
}