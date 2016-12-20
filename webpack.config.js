var webpack = require('webpack')

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery',
        jsdom: 'window',
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            main: 'app/components/Main.jsx',
            navigation: 'app/components/Navigation.jsx',
            applicationStyles: 'app/sass/app.sass',
            countdown: 'app/components/Countdown.jsx',
            timer: 'app/components/Timer.jsx',
            clock: 'app/components/Clock.jsx',
            countdownform: 'app/components/CountdownForm.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'latest', 'stage-0']
                }
            },
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.sass$/, loader: 'style-loader!css-loader!sass-loader'},
            {
                test: /\.pug$/,
                exclude: /(node_modules)/,
                loader: 'pug-html-loader',
                query: {
                    pretty: true
                }
            }
        ]
    },
    devtool: 'inline-source-map'
}

// If you are getting this error, try setting the value to either "inline-source-map" or "eval-source-map" instead.
