/**
 * External dependencies
 */
const express = require( 'express' );
const path = require( 'path' );

const app = express();
const publicPath = path.join( __dirname, '../client/public' );

app.use( express.static( publicPath ) );

app.get( '/', ( request, response ) => {
	response.sendFile( path.join( publicPath, 'index.html' ) );
} );

app.get( '/api', ( request, response ) => {
	response.send( { ok: true } );
} );

// eslint-disable-next-line no-unused-vars
app.use( ( error, request, response, next ) => {
	console.trace( error );
	response.json( { error: error.message } );
} );

app.listen( process.env.PORT || 8080, () =>
	console.log( `🚀  Server listening on port ${ process.env.PORT || 8080 }` )
);
