/*
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import mount from 'utils/mount';
import Topbar from 'components/Topbar';

describe( 'Topbar', () => {
	it( 'renders correctly', () => {
		expect(
			mount( <Topbar title="Testing" /> ).getByTestId( 'heading' )
		).toHaveLength( 1 );
	} );
} );
