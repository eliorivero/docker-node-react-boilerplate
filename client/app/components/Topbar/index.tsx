/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import './style.scss';

Topbar.propTypes = {
	title: PropTypes.string.isRequired,
};

export interface TopbarProps {
	title: string;
}

/**
 * Displays a bar with a title
 *
 * @param {Object} props       Component properties.
 * @param {string} props.title Text to display in the topbar.
 */
export default function Topbar( props: TopbarProps ): JSX.Element {
	return <h2 data-testid="heading">{ props.title }</h2>;
}
