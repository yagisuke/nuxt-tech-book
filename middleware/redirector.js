export default function({ redirect, route }) {
  if (route.path === '/users/yagi') {
    redirect('/users/yagisuke')
  }
}