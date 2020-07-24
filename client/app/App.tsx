/**
 * External dependencies
 */
import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import axios from 'axios';

/**
 * Internal dependencies
 */
import Topbar from 'components/Topbar';
import Card from 'components/Card';
import './style.scss';

export default hot( function App(): React.ReactNode {
	useEffect( () => {
		axios.get( '/api' );
	}, [] );
	return (
		<div className="main">
			<Topbar title="Dockerized React and Node" />
			<Card>
				<p>Your app content goes here</p>
			</Card>
		</div>
	);
} );
