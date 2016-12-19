/**
 * Created by Ayush Agrawal on 12/12/2016.
 */

module.exports = {
    entry: './app-client.js',
    output: {
        filename: 'public/bundle.js'
    },

    devTool: 'source-map',

    module: {
        loaders: [{
            exclude: /(node_modules|app-server.js)/,
            loader: 'babel',
            query: {
                presets: ['es2015','react']
            }
        }]
    }

};