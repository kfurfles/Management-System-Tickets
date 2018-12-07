import routeImporter from '@/modules/importers/routeImporter'
import RouterView from '@/containers/Router'

const routes = routeImporter(require.context('./System', false, /.*\.js$/))

export default {
  path: '',
  component: RouterView,
  children: routes
}
