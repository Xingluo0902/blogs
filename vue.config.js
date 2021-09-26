module.exports = {

    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',

            }
        },
        devServer: {
            host: 'localhost',
            port: '8080',
            // proxy: {
            //     '/api': {
            //         target: 'http://qclqn0t.dongtaiyuming.net',
            //         changeOrigin: true,
            //         ws: true,
            //         pathRewrite: {
            //             '^/api': ''
            //         }
            //     }

            // }
        }
    },
    publicPath: './',
    indexPath: 'index.html'


}