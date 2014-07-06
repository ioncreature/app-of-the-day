/**
 * @author Alexander Marenin
 * @date July 2014
 */

var Schema = require( 'mongoose' ).Schema;

module.exports = new Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    lastEnter: Date
});