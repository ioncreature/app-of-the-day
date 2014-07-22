/**
 * @author Alexander Marenin
 * @date July 2014
 */

var router = require( 'express' ).Router(),
    util = require( '../lib/util' ),
    registry = require( '../lib/registry' ),
    config = registry.get( 'config' ),
    route = config.route,
    packageInfo = util.getPackageInfo(),
    db = registry.get( 'db' ),
    Device = db.Device,
    Notification = db.Notification;

module.exports = router;


router.get( route.API_INFO, function( req, res ){
    res.json({
        name: 'App of the day HTTP API',
        version: packageInfo.version
    });
});


router.get( route.GET_NOTIFICATIONS, function( req, res, next ){
    var q = req.query,
        data = {
            id: q.id,
            country: q.country,
            locale: q.locale,
            simCountry: q.simCountry,
            operatorId: q.operatorId,
            apiLevel: q.apiLevel,
            osVersion: q.osVersion,
            manufacturer: q.manufacturer,
            model: q.model,
            lastActive: new Date
        };

    if ( Device.isValid(data) )
        Device.register( data, function( error, device ){
            if ( error )
                next( error );
            else if ( !device )
                next( new Error('Where is device?') );
            else
                device.getAppOfTheDay( function( error, app ){
                    if ( error )
                        next( error );
                    else
                        res.json({
                            status: 'ok',
                            ad: {
                                id: app._id,
                                title: app.notification.title,
                                text: app.notification.text,
                                bigText: app.notification.bigText,
                                bigPictureUrl: app.notification.bigPictureUrl,
                                iconUrl: app.notification.iconUrl
                            }
                        });
                });
        });
    else
        next( new Error('Invalid input') );
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


router.use( function( res, req, next ){
    var e = new Error( 'Not Found' );
    e.status = 404;
    next( e );
});


router.use( function( error, req, res, next ){
    res.json( error.status || 500, {
        status: 'error',
        message: error.message,
        stack: config.debug ? error.stack : ''
    });
});