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


        }
    }
}