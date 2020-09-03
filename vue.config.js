module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    pwa: {
        name: 'Sahadat Rana Khan',
        iconPaths: {
            favicon32: 'favicon2.png',
            favicon16: 'favicon2.png',
            appleTouchIcon: 'favicon2.png',
            maskIcon: 'favicon2.png',
            msTileImage: 'favicon2.png',
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