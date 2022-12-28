import config from '~/config';

import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';

import DefaultLayout from '~/layouts/DefaultLayout/DefaultLayout';

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: DefaultLayout },
    { path: config.routes.notFound, component: NotFound, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
