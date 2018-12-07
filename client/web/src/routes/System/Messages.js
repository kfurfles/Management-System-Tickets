import routeImporter from '@/modules/importers/routeImporter'
import RouterView from '@/containers/Router'

const routes = routeImporter(require.context('./Messages', false, /.*\.js$/))

export default {
  path: '',
  component: RouterView,
  children: routes
}
