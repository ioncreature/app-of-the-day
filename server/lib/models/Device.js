/**
 * @author Alexander Marenin
 * @date July 2014
 */

var Schema = require( 'mongoose' ).Schema;

module.exports = new Schema({
    imei: String,
    deviceId: String,
    country: String,
    locale: String,
    simCountry: String,
    operatorId: String,
    apiLevel: String,
    osVersion: String,
    manufacturer: String,
    model: String,
    lastActive: Date
});
