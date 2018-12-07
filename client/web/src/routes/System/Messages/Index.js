const Messages = () => import('@/views/Messages/Index')

export default {
  path: 'messages',
  name: 'Messages',
  component: Messages,
  meta: {
    name: 'Meus Chamados',
    showBack: true
  }
}
