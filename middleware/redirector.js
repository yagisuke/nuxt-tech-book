export default function({ redirect, route }) {
  console.log(route.path)
  if (route.path === '/users/yagi') {
    redirect('/users/yagisuke')
  }
}