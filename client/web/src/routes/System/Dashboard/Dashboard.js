const Dashboard = () => import('@/views/Dashboard/Index')

export default {
  path: 'home',
  name: '/',
  component: Dashboard,
  meta: {
    name: 'Lista de Chamados'
  }
}
