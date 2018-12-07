const Management = () => import('@/views/Users/Management')

export default {
  path: 'users',
  name: 'ManagementUsers',
  component: Management,
  meta: {
    name: 'Lista de Usuários',
    showBack: true
  }
}
