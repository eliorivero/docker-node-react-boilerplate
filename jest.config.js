module.exports = {
	clearMocks: true,
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': '<rootDir>/client/__mocks__/styleMock.js',
	},
	setupFilesAfterEnv: [ '<rootDir>/client/jest-setup.js' ],
	setupFiles: [ '<rootDir>/client/__mocks__/dom-setup.js' ],
	verbose: true,
	moduleDirectories: [ 'node_modules', '<rootDir>/client/app' ],
};
