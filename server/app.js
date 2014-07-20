#!/usr/bin/env node
/**
 * @author Alexander Marenin
 * @date July 2014
 */

var program = require( 'commander' ),
    util = require( './lib/util' ),
    packageInfo = util.getPackageInfo(),
    registry = require( './lib/registry' );


program
    .version( packageInfo.version )
    .usage( '[options] <command>' )
    .option( '-c, --config [name]', 'set the config name to use, default is "dev"', 'dev' );


program.parse( process.argv );
var config = util.getConfig( program.config );
process.title = config.processTitle;
registry.set( 'config', config );

var db = require( './lib/db' );


db.connect( config.mongodb, {}, function( error ){
    if ( error ){
        console.log( error );
        process.abort();
    }
    else {
        registry.set( 'db', db );
        var app = require( './lib/apiServer' );
        app.listen( config.port, function( error ){
            if ( error )
                abort( error );
            else
                console.log( 'Server listening on port %s', config.port );
        });
    }
});


function abort( error ){
    if ( error )
        console.error( error );
    process.abort();
}