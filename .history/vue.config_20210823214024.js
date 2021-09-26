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
            proxy: {
                '/': {
                    target: 'http://cqclqn0t.dongtaiyuming.net',
                    changeOrigin: true,
                }
            }
        }
    }
}