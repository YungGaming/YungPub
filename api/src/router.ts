import { RouteCollection } from './service/route.service';

import { ServerInfo } from './route/server.route';

import {
    SearchPlayer,
    SearchMatch,
    SearchSeasons,
} from './route/search.route';

export const ServerRoutes = [
    { type: 'GET', path: '/', component: ServerInfo },
];

export const SearchRoutes = [
    { type: 'GET', path: '/search/player', component: SearchPlayer },
    { type: 'GET', path: '/search/match', component: SearchMatch },
    { type: 'GET', path: '/search/season', component: SearchSeasons },
];

export function InitRoutes(app) {
    RouteCollection(app, 'Base server', ServerRoutes);
    RouteCollection(app, 'Search', SearchRoutes);
}
