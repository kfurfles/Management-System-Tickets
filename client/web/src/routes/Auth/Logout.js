const Logout = () => import('@/views/Auth/Logout')

export default {
  path: '/redirect',
  name: 'Logout',
  component: Logout,
  type: 'login',
  isAuth: true,
  icon: 'icn_logout',
  meta: {
    rule: 'isPublic'
  }
}
