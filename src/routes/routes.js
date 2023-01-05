import config from '~/config';

import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';
import WatchVideo from '~/pages/WatchVideo';

import DefaultLayout from '~/layouts/DefaultLayout';
import SidebarToggle from '~/layouts/SidebarToggle';

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: DefaultLayout },
    { path: config.routes.notFound, component: NotFound, layout: DefaultLayout },
    { path: config.routes.watchVideo, component: WatchVideo, layout: SidebarToggle },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
