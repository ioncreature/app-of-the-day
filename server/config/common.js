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

    // REST API
    API: '/api',
    API_INFO: '/',
    CARDS: '/card',
    CARD: '/card/:id',
    ISSUERS: '/issuer',
    ISSUER: '/issuer/:id'
};


exports.webServer = {

};


exports.apiServer = {
    port: 3000,
    route: {
        INDEX: '/',

    }
};