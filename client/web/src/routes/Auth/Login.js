const Login = () => import('@/views/Auth/Login')

export default {
  path: '/login',
  name: 'Login',
  component: Login,
  type: 'login',
  icon: 'icn_login',
  meta: {
    guestGuard: true,
    title: 'Login'
  }
}
