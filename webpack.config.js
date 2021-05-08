const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
	entry: './main.js', // 配置入口文件
	output: { // 配置输出文件
		path: __dirname, // 输出文件的路径，此处设为当前路径
		filename: 'bundle.js', // 指定输出的文件名称
	},
	resolve: {}, // 其他的配置选项
	module: {
		rules: [{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
			  test: /\.scss$/,
			  use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
			  test: /\.(jpg|png|gif|bmp|jpeg)$/,
			  use: 'url-loader'
			},
			{
			  test: /\.(ttf|eot|svg|woff|woff2)$/,
			  use: 'url-loader'
			},

			// 在此处可以添加更多rules
		]
	},
	

	plugins: [new VueLoaderPlugin()], // 插件

}
