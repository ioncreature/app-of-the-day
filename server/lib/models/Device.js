/**
 * @author Alexander Marenin
 * @date July 2014
 */

var Schema = require( 'mongoose' ).Schema,
    ObjectId = Schema.Types.ObjectId;

var Device = new Schema({
    id: String,
    country: String,
    locale: String,
    simCountry: String,
    operatorId: String,
    apiLevel: String,
    osVersion: String,
    manufacturer: String,
    model: String,
    lastActive: Date,
    apps: [{id: String, installed: Date, removed: Date}],
    notifications: [ObjectId]
});


module.exports = Device;


Device.statics.register = function( data, callback ){
    var DeviceModel = this.model( 'Device' );
    this.findOne( {id: data.id}, function( error, device ){
        if ( error )
            callback( error );
        else if ( !device )
            DeviceModel.create( data, callback );
        else {
            device.set( 'lastActive', new Date );
            device.save( callback );
        }
    });
};


Device.statics.isValid = function( data ){
    return data && !!data.id;
};


Device.methods.getAppOfTheDay = function( callback ){

};