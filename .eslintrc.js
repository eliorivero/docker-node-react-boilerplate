module.exports = {
	root: true,
	rules: {
		'no-console': 'off',
	},
	env: {
		commonjs: true,
		es6: true,
		node: true,
	},
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	parserOptions: {
		ecmaVersion: 2020,
	},
};
