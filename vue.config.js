module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    pwa: {
        name: 'Sahadat Rana Khan',
        iconPaths: {
            favicon32: 'favicon.png',
            favicon16: 'favicon.png',
            appleTouchIcon: 'favicon.png',
            maskIcon: 'favicon.png',
            msTileImage: 'favicon.png',
        }
    },
    // publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "/",
    productionSourceMap: process.env.NODE_ENV == "production" ? false : true,
    configureWebpack: {
        performance: {
            hints: "warning"
        },
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 250000
            }
        }
    }
}