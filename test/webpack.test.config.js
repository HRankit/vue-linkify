module.exports = {
    module: {
        rules: [{
            test: /test\/.*\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['babel-preset-env'],
                    // plugins: [require('@babel/plugin-transform-es2015-modules-commonjs')]
                }
            }
        }]
    },
    resolve: {
        modules: ["node_modules", './'],
        extensions: [".js"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },


};