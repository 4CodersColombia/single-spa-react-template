const { merge } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react-ts')
const Dotenv = require('dotenv-webpack')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = (webpackConfigEnv, argv) => {
    const defaultConfig = singleSpaDefaults({
        argv,
        orgName: 'xuach',
        projectName: 'template-react-single-spa',
        webpackConfigEnv,
    })

    return merge(defaultConfig, {
        plugins: [new Dotenv()],
        // modify the webpack config however you'd like to by adding to this object
    })
}
