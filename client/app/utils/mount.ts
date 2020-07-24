import { ReactWrapper } from 'enzyme';

interface MountWrapper extends ReactWrapper {
	getByTestId( id: number | string ): ReactWrapper;
}

class MountWrapper extends ReactWrapper {
	getByTestId( id: number | string ): ReactWrapper {
		return this.find( '[data-testid="' + id + '"]' );
	}
}

const mount = ( node: JSX.Element | JSX.Element[] ): MountWrapper => new MountWrapper( node );

export default mount;
