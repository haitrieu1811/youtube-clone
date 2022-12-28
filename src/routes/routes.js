import config from '~/config';

import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: null },
    { path: config.routes.notFound, component: NotFound, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
