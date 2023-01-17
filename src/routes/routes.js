import React from 'react';

import config from '~/config';

import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';
// import WatchVideo from '~/pages/WatchVideo';
import Search from '~/pages/Search';

import DefaultLayout from '~/layouts/DefaultLayout';
import SidebarToggle from '~/layouts/SidebarToggle';

const WatchVideo = React.lazy(() => import('~/pages/WatchVideo'));

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: DefaultLayout },
    { path: config.routes.notFound, component: NotFound, layout: DefaultLayout },
    { path: config.routes.watchVideo, component: WatchVideo, layout: SidebarToggle },
    { path: config.routes.search, component: Search, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
