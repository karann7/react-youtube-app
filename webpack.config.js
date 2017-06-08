module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    root: __dirname,
    alias: {
      Search_bar: 'src/components/search-bar.jsx',
      Video_detail: 'src/components/video-detail.jsx',
      Video_list_item: 'src/components/video-list-item.jsx',
      Video_list: 'src/components/video-list.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
