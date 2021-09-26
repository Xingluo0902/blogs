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
            port: '8080'
        }
    }
}