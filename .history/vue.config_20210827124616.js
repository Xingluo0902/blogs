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
            // assetsPublishPath: '/',
            // assetsSubDirectory: 'static',
            port: '8080',
            proxy: {
                'api': {
                    target: 'http://cqclqn0t.dongtaiyuming.net',
                    changeOrigin: true,
                    ws: true,
                    pathRewrite: {
                        '^/api': ''
                    }
                }
            }
        }
    }
}