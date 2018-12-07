const Tickets = () => import('@/views/Tickets/Create')

export default {
  path: 'tickets/new',
  name: 'tickets.create',
  component: Tickets,
  meta: {
    name: 'Novo Chamado',
    showBack: true
  }
}
