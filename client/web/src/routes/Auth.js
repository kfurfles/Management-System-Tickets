import routeImporter from '@/modules/importers/routeImporter'

const routes = routeImporter(require.context('./Auth', false, /.*\.js$/))
import RouterView from '@/containers/Router'

export default {
    path: '',
    component: RouterView,
    children: routes
}
