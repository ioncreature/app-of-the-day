/**
 * @author Alexander Marenin
 * @date July 2014
 */

exports.title = 'App of the day';
exports.processTitle = 'app-of-the-day';

exports.route = {
    PUBLIC: '/public',
    PUBLIC_CSS: '/public/css',

    INDEX: '/',
    LOGIN: '/login',
    LOGOUT: '/logout',


    // Client API
    GET_NOTIFICATIONS: '/notification',
    OPEN_NOTIFICATION: '/notification/:id/open',
    GET_APP: '/app-of-the-day',
    OPEN_APP: '/app/:id/open',
    APPS_STATUS: '/user/:id/apps',


    // REST API
    API_PREFIX: '/api',
    API_INFO: '/',
    CARDS: '/card',
    CARD: '/card/:id',
    ISSUERS: '/issuer',
    ISSUER: '/issuer/:id'
};


exports.webServer = {
    port: 1337
};


exports.apiServer = {
    port: 3000
};