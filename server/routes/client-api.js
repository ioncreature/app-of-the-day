/**
 * @author Alexander Marenin
 * @date July 2014
 */

var router = require( 'express' ).Router(),
    util = require( '../lib/util' ),
    registry = require( '../lib/registry' ),
    packageInfo = util.getPackageInfo(),
    route = registry.get( 'config' ).route;

module.exports = router;


router.get( route.API_INFO, function( req, res ){
    res.json({
        name: 'App of the day REST API',
        version: packageInfo.version
    });
});


router.get( route.GET_NOTIFICATIONS, function( req, res ){
    res.json( {status: 'ok'} );
});


router.post( route.OPEN_NOTIFICATION, function( req, res ){
    res.json( {status: 'ok'} );
});


router.post( route.GET_APP, function( req, res ){
    res.json( {status: 'ok'} );
});


router.post( route.OPEN_APP, function( req, res ){
    res.json( {status: 'ok'} );
});


