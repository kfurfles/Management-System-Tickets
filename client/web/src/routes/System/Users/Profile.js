const Profile = () => import('@/views/Users/Profile')

export default {
  path: 'profile',
  name: 'Profile',
  component: Profile,
  meta: {
    name: 'Meu perfil',
    showBack: true
  }
}
