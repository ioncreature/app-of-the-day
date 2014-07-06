/**
 * @author Alexander Marenin
 * @date July 2014
 */

var express = require( 'express' ),
    join = require( 'path' ).join,
    favicon = require( 'serve-favicon' ),
    logger = require( 'morgan' ),
    cookieParser = require( 'cookie-parser' ),
    bodyParser = require( 'body-parser' ),
    registry = require( './registry' ),
    app = express(),
    config = registry.get( 'config' ),
    route = config.route;


var index = require( '../routes/index' ),
    api = require( '../routes/api' );

app.set( 'views', join(__dirname, '..', 'views') );
app.set( 'view engine', 'jade' );

app.locals.route = config.route;
app.locals.title = config.title;

app.use( logger('dev') );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: true}) );
app.use( cookieParser() );
app.use( route.API, api );
app.use( route.INDEX, index );

app.use( function( req, res, next ){
    var err = new Error( 'Not Found' );
    err.status = 404;
    next( err );
});

app.use( function( err, req, res, next ){
    res.status( err.status || 500 );
    res.render( 'error', {
        message: err.message,
        error: config.debug ? err : ''
    });
});


app.listen( config.port, function( error ){
    if ( error )
        console.error( error );
    else
        console.log( 'Server listening on port %s', config.port );
});

