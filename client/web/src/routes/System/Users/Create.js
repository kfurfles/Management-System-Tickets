const Create = () => import('@/views/Users/User/Create')

export default {
  path: 'users/novo',
  name: 'CreateUser',
  component: Create,
  meta: {
    name: 'Novo Usuário',
    showBack: true
  }
}
