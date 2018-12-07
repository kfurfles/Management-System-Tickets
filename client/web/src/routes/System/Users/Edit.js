const Edit = () => import('@/views/Users/User/Edit')

export default {
  path: 'users/:id',
  name: 'EditUser',
  component: Edit,
  meta: {
    name: 'Edição Usuário',
    showBack: true
  }
}
