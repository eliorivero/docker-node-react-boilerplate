const path = require( 'path' );
const TerserJSPlugin = require( 'terser-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const CopyPlugin = require( 'copy-webpack-plugin' );
const webpackConfig = {
	entry: {
		main: './client/app/index.js',
	},
	mode: 'production',
	output: {
		path: path.join( __dirname, 'client/public' ),
		filename: 'scripts.js',
	},
	resolve: {
		extensions: [ '.ts', '.tsx', '.js' ],
		modules: [ path.resolve( __dirname, 'client/app' ), 'node_modules' ],
		mainFiles: [ 'index' ],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
			},
			{
				test: /\.js$/,
				loader: 'source-map-loader',
			},
			{
				test: /\.scss$/,
				use: [
					'development' === process.env.NODE_ENV
						? 'style-loader'
						: MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin( {
			template: 'client/app/index.html',
			inject: false,
			isDev: process.env.NODE_ENV === 'development',
		} ),
		new CopyPlugin( {
			patterns: [ { from: 'client/app/favicon', to: 'client/public' } ],
		} ),
		new MiniCssExtractPlugin( { filename: './styles.css' } ),
	],
};

if ( 'development' === process.env.NODE_ENV ) {
	webpackConfig.mode = 'development';
	webpackConfig.entry = [ 'react-hot-loader/patch', './client/app/index.js' ];
	webpackConfig.resolve.alias = {
		'react-dom': '@hot-loader/react-dom',
	};
	webpackConfig.devServer = {
		host: 'localhost',
		port: 3000,
		open: false,
		proxy: {
			'/api': 'http://localhost:8080',
		},
		hot: true,
		inline: true,
		headers: { 'Access-Control-Allow-Origin': '*' },
	};
} else {
	webpackConfig.optimization = {
		minimizer: [ new OptimizeCSSAssetsPlugin( {} ), new TerserJSPlugin() ],
	};
}

module.exports = webpackConfig;
