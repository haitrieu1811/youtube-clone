import React from 'react';

import config from '~/config';

import DefaultLayout from '~/layouts/DefaultLayout';
import SidebarToggle from '~/layouts/SidebarToggle';

const Home = React.lazy(() => import('~/pages/Home'));
const Search = React.lazy(() => import('~/pages/Search'));
const WatchVideo = React.lazy(() => import('~/pages/WatchVideo'));
const Channel = React.lazy(() => import('~/pages/Channel'));
const NotFound = React.lazy(() => import('~/pages/NotFound'));

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: DefaultLayout },
    { path: config.routes.notFound, component: NotFound, layout: DefaultLayout },
    { path: config.routes.watchVideo, component: WatchVideo, layout: SidebarToggle },
    { path: config.routes.search, component: Search, layout: DefaultLayout },
    { path: config.routes.channel, component: Channel, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
