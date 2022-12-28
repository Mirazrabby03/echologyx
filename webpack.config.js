const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');
const nodeExternals = require('webpack-node-externals');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = async () => {
    const { getActiveCursor } = require('./services/libs');
    const cursor = await getActiveCursor;

    // Escape
    if (!cursor) {
        console.log(
            "No cursor detected. To set it up, please use 'npm run cli'."
        );
        process.exit(0);
    }

    const { nodePath } = cursor;
    const sourceEntry = path.resolve(__dirname, nodePath, 'index.js');

    const sourceOutput = path.join(nodePath, 'compiled', 'source.js');
    const configEntry = path.resolve(__dirname, nodePath, 'config.js');

    const configOutput = path.join(nodePath, 'compiled', 'config.js');

    return {
        mode: 'development',
        stats: 'errors-only',
        entry: { [sourceOutput]: [sourceEntry], [configOutput]: [configEntry] },
        output: {
            filename: '[name]',
            path: path.resolve(__dirname)
        },
        target: 'node',
        node: {
            __dirname: true
        },
        module: {
            rules: [
                {
                    test: /.scss$/i,
                    use: [
                        'style-loader',
                        'to-string-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        plugins: [
            new LiveReloadPlugin(),
            new WebpackShellPlugin({
                onBuildEnd: ['npm run serve']
            }),
            {
                apply: compiler => {
                    compiler.hooks.afterEmit.tap(
                        'AfterEmitPlugin',
                        async () => {
                            console.log('Updating "lastUpdated" goes here!');
                        }
                    );
                }
            }
        ],
        externals: [nodeExternals()]
    };
};
