var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports ={
    entry: "./app/App.js",
    output: {
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
              test: /\.css$/,
              include: /app/,
              loaders: ExtractTextPlugin.extract( 'babel-loader', 'css-loader!postcss-loader' )
            }
        ]
    },
    plugins: [
      new ExtractTextPlugin( 'app.css' )
    ]
}
