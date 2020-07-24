/**
 * External dependencies
 */
import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';

/**
 * Internal dependencies
 */
import Topbar from 'components/Topbar';
import Block from 'components/Block';
import './style.scss';

export default hot( function App() {
	useEffect( () => {
		window.fetch( '/api' );
	}, [] );
	return (
		<div className="create-wp-react-plugin">
			<Topbar title="Create WordPress React Plugin" />
			<Block>
				<p>Your react app goes here</p>
			</Block>
		</div>
	);
} );
