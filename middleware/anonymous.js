export default ({ route }) => {
  if (route.path === '/' || route.path === '/get-task' || route.path === '/post-task' || route.path === '/get-activity') {
    console.log('Middleware to check or perform any action on route change')
  }
}
