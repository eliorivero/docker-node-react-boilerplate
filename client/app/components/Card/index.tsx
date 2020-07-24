/**
 * External dependencies
 */
import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import './style.scss';

Card.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType( [ PropTypes.object, PropTypes.array ] )
		.isRequired,
};

Card.defaultProps = {
	className: '',
};

export interface CardProps {
	children: ReactNode;
	className: string;
}

/**
 * Displays a bar with a title and links.
 *
 * @param {Object} props          Component properties.
 * @param {Object} props.children Elements wrapped by this component.
 * @param {Object} props.className Elements wrapped by this component.
 */
export default function Card( props: CardProps ): JSX.Element {
	return (
		<div className={ `card ${ props.className }` }>{ props.children }</div>
	);
}
