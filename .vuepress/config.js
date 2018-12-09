const path = require('path');
const sassConfig = {
    includePaths: [
        path.resolve(__dirname, '../node_modules')
    ]
};

module.exports = {
    title: 'Blog',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' }
        ],
        /*sidebar: [
            '/',
            '/blog/'
        ]*/
    },
    scss: sassConfig,
    sass: sassConfig,
    chainWebpack: (config, isServer) => {
        config.resolveLoader
            .modules
            .add(path.resolve(__dirname, './node_modules'))
    }
};