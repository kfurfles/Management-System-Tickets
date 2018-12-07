const ChatMessage = () => import('@/views/Messages/Show')

export default {
  path: 'messages/:id',
  name: 'chatMessage',
  component: ChatMessage,
  meta: {
    name: '',
    showBack: true,
    noMenu: true
  }
}
