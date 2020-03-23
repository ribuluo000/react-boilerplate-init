// Important modules this config uses
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const OfflinePlugin = require('offline-plugin');
const { HashedModuleIdsPlugin } = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

const devMode = process.env.NODE_ENV === 'development';

const mincssLoader = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: (resourcePath, context) =>
      // publicPath is the relative path of the resource to the context
      // e.g. for ./css/admin/main.css the publicPath will be ../../
      // while for ./css/main.css the publicPath will be ../
      `${path.relative(path.dirname(resourcePath), context)}/`,
    // publicPath: '../',
    // only enable hot in development
    hmr: devMode,
    // if hmr does not work, this is a forceful method.
    reloadAll: true,
  },
};

module.exports = require('./webpack.base.babel')({
  mode: 'production',

  // In production, we skip all hot-reloading stuff
  entry: [
    require.resolve('react-app-polyfill/ie11'),
    path.join(process.cwd(), 'app/app.js'),
  ],

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[name].[chunkhash].chunk.js',
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            comparisons: false,
          },
          parse: {},
          mangle: true,
          output: {
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        cache: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    nodeEnv: 'production',
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      // minSize: 0,
      // maxSize: 244000,
      minSize: 200000,
      maxSize: 244000,
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        styles: {
          chunks: 'all',
          name: 'style',
          test: /\.css$/,
          enforce: true,
        },
        antd2: {
          chunks: 'all',
          name: 'npm.ant-design',
          // minSize: 200000,
          // maxSize: 244000,
          test: /node_modules\/@ant-design/,
          enforce: true,
        },
        antd: {
          chunks: 'all',
          name: 'npm.antd',
          test: /node_modules\/antd/,
          enforce: true,
        },
        react: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/](react)[\\/]/,
          name: 'npm.react',
          enforce: true,
        },
        reactDom: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/](react-dom)[\\/]/,
          name: 'npm.react-dom',
          enforce: true,
        },
        mockjs: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/](mockjs)[\\/]/,
          name: 'npm.mockjs',
          enforce: true,
        },
        lodash: {
          chunks: 'all',
          name: 'npm.lodash',
          test: /node_modules\/lodash/,
          enforce: true,
        },
        echarts: {
          chunks: 'all',
          name: 'npm.echarts',
          test: /node_modules\/echarts/,
          enforce: true,
        },
        moment: {
          chunks: 'all',
          name: 'npm.moment',
          test: /node_modules\/moment/,
          enforce: true,
        },
        core_js: {
          chunks: 'all',
          name: 'npm.core_js',
          test: /node_modules\/core-js/,
          enforce: true,
        },
        bignumber: {
          chunks: 'all',
          name: 'npm.bignumber.js',
          test: /node_modules\/bignumber.js/,
          enforce: true,
        },
        intl: {
          chunks: 'all',
          name: 'npm.intl',
          test: /node_modules\/intl/,
          enforce: true,
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
            )[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new DuplicatePackageCheckerPlugin(),
    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode
        ? '[name].css'
        : 'css/style.[name].[chunkhash].[hash].css',
      chunkFilename: devMode
        ? '[id].css'
        : 'css/style.[name].[chunkhash].[hash].[id].chunk.css',
    }),

    // Put it in the end to capture all the HtmlWebpackPlugin's
    // assets manipulations and do leak its manipulations to HtmlWebpackPlugin
    new OfflinePlugin({
      relativePaths: false,
      publicPath: '/',
      appShell: '/',

      // No need to cache .htaccess. See http://mxs.is/googmp,
      // this is applied before any match in `caches` section
      excludes: ['.htaccess'],

      caches: {
        main: [':rest:'],

        // All chunks marked as `additional`, loaded after main section
        // and do not prevent SW to install. Change to `optional` if
        // do not want them to be preloaded at all (cached only when first loaded)
        additional: ['*.chunk.js'],
      },

      // Removes warning for about `additional` section usage
      safeToUseOptionalCaches: true,
    }),

    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),

    new WebpackPwaManifest({
      name: 'React Boilerplate',
      short_name: 'React BP',
      description: 'My React Boilerplate-based project!',
      background_color: '#fafafa',
      theme_color: '#b1624d',
      inject: true,
      ios: true,
      icons: [
        {
          src: path.resolve('app/assets/images/icon-512x512.png'),
          sizes: [72, 96, 128, 144, 192, 384, 512],
        },
        {
          src: path.resolve('app/assets/images/icon-512x512.png'),
          sizes: [120, 152, 167, 180],
          ios: true,
        },
      ],
    }),

    new HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20,
    }),
    // Make sure that the plugin is after any plugins that add images
    new ImageminPlugin({
      disable: false, // Disable during development
      pngquant: {
        quality: '95-100',
      },
    }),
  ],

  performance: {
    assetFilter: (assetFilename) =>
      !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
  mincssLoader,
});
