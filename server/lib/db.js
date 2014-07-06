/**
 * @author Alexander Marenin
 * @date July 2014
 */


var mongoose = require( 'mongoose' ),
    util = require( './util' ),
    url = require( 'url' ),
    connection;

/**
 * @param {Array} connectObject
 * @param {Object?} options
 * @param {function(error Error)} callback
 */
exports.connect = function( connectObject, options, callback ){
    var url = connectObject.map( format ).join( ',' );

    connection = mongoose.connect( url, options, callback );
};


exports.User = mongoose.model( 'User', require('./models/User'), 'users' );
exports.Device = mongoose.model( 'Device', require('./models/Device'), 'devices' );
exports.Offer = mongoose.model( 'Offer', require('./models/Offer'), 'offers' );


function format( connectionParams ){
    var settings = {
        port: 27017,
        slashes: true,
        protocol: 'mongodb'
    };

    settings.pathname = connectionParams.dbname;

    return url.format( util.mixin(settings, connectionParams) );
}