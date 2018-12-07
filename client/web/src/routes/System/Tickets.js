import routeImporter from '@/modules/importers/routeImporter'
import RouterView from '@/containers/Router'

const routes = routeImporter(require.context('./Tickets', false, /.*\.js$/))

export default {
  path: '',
  component: RouterView,
  children: routes
}
