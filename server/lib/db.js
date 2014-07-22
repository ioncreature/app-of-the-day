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
exports.AppOfTheDay = mongoose.model( 'AppOfTheDay', require('./models/AppOfTheDay'), 'appsOfTheDay' );
exports.Notification = mongoose.model( 'Notification', require('./models/Notification'), 'notifications' );
exports.ObjectId = mongoose.Types.ObjectId;


function format( connectionParams ){
    var settings = {
        port: 27017,
        slashes: true,
        protocol: 'mongodb'
    };
    settings.pathname = connectionParams.dbname;

    return url.format( util.mixin(settings, connectionParams) );
}