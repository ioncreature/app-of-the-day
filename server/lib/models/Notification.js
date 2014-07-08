/**
 * @author Marenin Alexander
 * @date July 2014
 */

var Schema = require( 'mongoose' ).Schema;

module.exports = new Schema({
    deviceId: {type: Schema.Types.ObjectId, ref: 'Device', index: true},
    appId: {type: Schema.Types.ObjectId, ref: 'AppOfTheDay', index: true},
    click: Date,
    open: Date,
    install: Date
});