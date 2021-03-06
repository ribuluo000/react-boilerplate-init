# 项目初始化注意事项

---

### 拉取 Git 代码 如下 https://github.com/react-boilerplate/react-boilerplate

1. Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2. Clone this repo using git clone --depth=1 https://github.com/react-boilerplate/react-boilerplate.git <YOUR_PROJECT_NAME>
3. Move to the appropriate directory: cd <YOUR_PROJECT_NAME>.

4. Run npm run setup in order to install dependencies and clean the git repo.

At this point you can run npm start to see the example app at http://localhost:3000.

5. Run npm run clean to delete the example app.

---

### 使用默认的初始化样式库 sanitize.css；

https://www.npmjs.com/package/sanitize.css

---

### 保留期望的代码 ；

---

### 删除不期望的代码；

- Reselect 弃用 ：原因是 从 redux 导入数据时，有的地方使用 reselect 有的地方不用会导致项目代码看起来和写起来不顺畅；核心功能 除非更改其中一个自变量，否则不会重新计算选择器。可以用 useMemo 代替；

---

### 更新为 "react-intl": "3.12.0",

//intl 使用示例

```
import React from 'react';
import { useIntl } from 'react-intl';
import messages from 'translations/messages';

export default function HomePage() {
const intl = useIntl();
return (
<h1>{intl.formatMessage(messages['This is the HomePage container!'])}</h1>
);
}

```

---

### 更新所有依赖；

---

### build 之后重新打开网页会自动更新到最新的缓存

```
// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  const runtime = require('offline-plugin/runtime');
  runtime.install({
    onUpdating: () => {
      console.log('SW Event:', 'onUpdating');
    },
    onUpdateReady: () => {
      console.log('SW Event:', 'onUpdateReady');
      // Tells to new SW to take control immediately
      runtime.applyUpdate(); // 如果我们不进行 applyUpdate 那么本地缓存的资源将永远得不到更新直到清除浏览器缓存，显然是我们所不希望的。
    },
    onUpdated: () => {
      console.log('SW Event:', 'onUpdated');
      // Reload the webpage to load into the new version
      window.location.reload();
    },
    onUpdateFailed: () => {
      console.log('SW Event:', 'onUpdateFailed');
    },
  });
}
```

---

### 使用 less 编写样式：添加 less 支持

https://github.com/react-boilerplate/react-boilerplate/blob/master/docs/css/README.md#less

```
    "less": "^3.11.1",
    "less-loader": "^5.0.0",
```

```

const antdThemeVars = require(`${path.resolve(process.cwd(), 'app', 'assets','less','antd','antdThemeVars.json')}`);

      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'less-loader',
            options: {
              importLoaders: 1,
              modifyVars: {
                ...antdThemeVars,
              },
              javascriptEnabled: true,
            },
          },
        ],
      },

```

---

### 添加 antd，并按需加载 antd;

https://ant.design/docs/react/introduce-cn

---

### url-loader 实现对图片的支持；image-webpack-loader 实现图片压缩,减少打包后的大小

```
npm i url-loader -D
npm i image-webpack-loader -D
```

- webpack.config.js

```
      {
        test: /\.(jpg|png|gif|mp4|webm)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name(file) {
                if (devMode) {
                  return '[path][name].[ext]';
                }
                return '[path][name].[ext]?[hash]';
              },
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                enabled: false,
                // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
                // Try enabling it in your environment by switching the config to:
                // enabled: true,
                // progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
            },
          },
        ],
      },
```

```
import image from 'zzdemos/assets/images/test.png';
import image2 from 'zzdemos/assets/images/test2.png';

      <img src={image} width={30} height={30} alt="test" />
      <img src={image2} width={30} height={30} alt="test" />
      <img
        src="https://www.baidu.com/img/bd_logo1.png"
        width={30}
        height={30}
        alt="test"
      />
```

---

### 添加自定义 svg 支持；

```
npm i @svgr/webpack -D
```

- webpack.config.js

```
{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: [ { loader: 'babel-loader', }, { loader: '@svgr/webpack', options: { babel: false, icon: true, }, }, ],}
```

```
import React from 'react';
export const SuccessSvg = props => {
const { color } = props;
return (
<svg
xmlns="http://www.w3.org/2000/svg"
xlink="http://www.w3.org/1999/xlink"
>
</svg>
);
};
```

```

import Icon from '@ant-design/icons’;
import MessageSvg from 'path/to/message.svg'; // path to your '*.svg' file.
Import {SuccessSvg} from ‘assets/svg’;
ReactDOM.render(<Icon component={SuccessSvg} />, mountNode);
```

https://ant.design/components/icon-cn/#%E8%87%AA%E5%AE%9A%E4%B9%89-SVG-%E5%9B%BE%E6%A0%87

---

### 重置 redux 为初始状态 eg: 在登录页需要进行重置；

const rootReducer = (state, action) => {
// 重置 redux 为初始状态 eg: 在登录页需要进行重置；
if (action.type === 'RESET_REDUX') {
const { language } = state;
state = { language };
}
return appReducer(state, action);
};

---

#### 网络请求

- axios

```
Promise based HTTP client for the browser and node.js

```

详见 README2.md

---

#### mock 数据

- mockjs

详见 README2.md mock 数据使用示例
详见 app/mocks/

### 格式化所有文件

```
npm run prettify "app/**/*.js"
npm run prettify "app/**/*.less"
npm run prettify "app/**/*.json”
```

---

##### 使用 ESLint+Prettier + pre-commit(pretty-quick husky) 来统一前端代码风格 (.js,.less,.json)

手动格式化所有文件

```
npm run prettify "app/**/*.js"
npm run prettify "app/**/*.less"
npm run prettify "app/**/*.json”
```

- prettier
- eslint-config-prettier
- eslint-plugin-prettier

- babel-eslint
- eslint
- eslint-config-airbnb
- eslint-config-airbnb-base
- eslint-import-resolver-webpack
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-redux-saga

- pre-commit
- husky
- pretty-quick

```
{
  "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged"
    }
  }
}

```

- pre-commit 的时候回检查并修复可以修复的 error，格式化代码，如果有修复不了的 error，那么需要手动修复后再重新 commit；

This boilerplate includes a complete static code analysis setup. It's composed of [ESLint](http://eslint.org/), [stylelint](https://stylelint.io/), and [Prettier](https://prettier.io/).

We recommend that you install the relevant IDE extensions for each one of these tools. Once you do, every time you'll press save, all your code will be formatted and reviewed for quality automatically. (Read more at [editor.md](./editor.md).)

We've also set up a git hook to automatically analyze and fix linting errors before your code is committed. If you'd like to disable it or modify its behavior, take a look at the `lint-staged` section in `package.json`.

参考：
[解决 Mac 下 SourceTree pre-commit 被跳过的问题 https://www.jianshu.com/p/7b7b20b35fde](https://www.jianshu.com/p/7b7b20b35fde)

https://prettier.io/

https://prettier.io/docs/en/precommit.html#option-2-pretty-quickhttpsgithubcomazzpretty-quick

---

### 添加 bignumber.js ，echarts ，

---

### 根据不同环境添加不同配置文件；

config

package.json

```
    "build:uat": "cross-env NODE_ENV=production config=uat webpack --config internals/webpack/webpack.prod.babel.js --color -p --progress --hide-modules --display-optimization-bailout",
    "build:dev": "cross-env NODE_ENV=production config=development webpack --config internals/webpack/webpack.prod.babel.js --color -p --progress --hide-modules --display-optimization-bailout",
    "build": "cross-env NODE_ENV=production config=production webpack --config internals/webpack/webpack.prod.babel.js --color -p --progress --hide-modules --display-optimization-bailout",
```

webpack.base.babel.js

```
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      config: 'development', // add this line
    }),
```

use in code

```
process.env.config
```

详见 config/index.js

---

### 使用 webpack 插件 clean-webpack-plugin 清除打包的老版本文件；

```
npm i -D clean-webpack-plugin
```

webpack.prod.babel.js

```
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


  plugins: [
    new CleanWebpackPlugin(),
  ]
```

---

### 使用 webpack 插件 imagemin-webpack-plugin 使用 imagemin 进行图片压缩；image-webpack-loader 实现图片压缩,减少打包后的大小

```
npm i -D imagemin-webpack-plugin
```

webpack.prod.babel.js

```
const ImageminPlugin = require('imagemin-webpack-plugin').default;



  plugins: [
        // Make sure that the plugin is after any plugins that add images
    new ImageminPlugin({
      disable: false, // Disable during development
      pngquant: {
        quality: '95-100'
      }
    }),
  ]
```

---

### 使用 webpack 插件 duplicate-package-checker-webpack-plugin 如果你的代码里面有重复的包，这个插件会给你警告进而避免打包的包体积过大或者产生 bug；

```
npm i -D duplicate-package-checker-webpack-plugin
```

webpack.prod.babel.js

```
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");


  plugins: [
    new DuplicatePackageCheckerPlugin(),
  ]
```

[https://github.com/darrenscerri/duplicate-package-checker-webpack-plugin](https://github.com/darrenscerri/duplicate-package-checker-webpack-plugin)

---

### 使用 webpack 插件 optimize-css-assets-webpack-plugin mini-css-extract-plugin 压缩 css； terser-webpack-plugin 压缩 js;

```
npm i -D optimize-css-assets-webpack-plugin
npm i -D mini-css-extract-plugin
```

webpack.prod.babel.js

```
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const devMode = process.env.NODE_ENV === 'development';

const mincssLoader = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: (resourcePath, context) => {
      // publicPath is the relative path of the resource to the context
      // e.g. for ./css/admin/main.css the publicPath will be ../../
      // while for ./css/main.css the publicPath will be ../
      return path.relative(path.dirname(resourcePath), context) + '/';
    },
    // publicPath: '../',
    // only enable hot in development
    hmr: devMode,
    // if hmr does not work, this is a forceful method.
    reloadAll: true,
  },
};


module.exports = {
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : 'css/style.[name].[chunkhash].[hash].css',
      chunkFilename: devMode ? '[id].css' : 'css/style.[name].[chunkhash].[hash].[id].chunk.css',
    }),
  ],
  mincssLoader,
};
```

webpack.prod.babel.js

```
'style-loader' 改为：
          options.mincssLoader ? options.mincssLoader : 'style-loader',
```

- mini-css-extract-plugin 插件应该只在生产环境构建中使用，并且在 loader 链中不应该有 style-loader;
  [https://www.cnblogs.com/blackgan/p/10590540.html](https://www.cnblogs.com/blackgan/p/10590540.html)

[https://github.com/webpack-contrib/mini-css-extract-plugin/issues/288](https://github.com/webpack-contrib/mini-css-extract-plugin/issues/288)

[https://github.com/darrenscerri/duplicate-package-checker-webpack-plugin](https://github.com/darrenscerri/duplicate-package-checker-webpack-plugin)

---

### 拆包 splitChunks

      minSize: 200000,
      maxSize: 244000,

```
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      minSize: 0,
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
          name: 'core_js',
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
```

---

---

### 深层对象安全调用

- loadash \_get

loadash 参数正好与 ramda 相反，从左到右，而且第二个参数可以是 Array 或 String：

_.get({ a: { b: 2 } }, ['a', 'b'], 'N/A');
_.get({ a: { b: 2 } }, 'a.b', 'N/A');

- const safe = obj?.qux?.baz; // undefined //禁用 因为 eslint 不能识别到 不好提交代码
  https://babeljs.io/docs/en/next/babel-plugin-proposal-optional-chaining
  https://www.jianshu.com/p/e9ed7660034e

https://lodash.com/docs/4.17.15#get

---

### 添加公共方法；

#### 工具类 使用示例：

utils/AABignumberUtils.js 项目中的 BigNumber 使用都在这里写;
utils/AADataUtils.js 项目中常用的数据处理方法写在这里;
utils/AADateTimeUtils.js 项目中常用的日期时间处理方法写在这里;
utils/AAStringUtils.js 项目中常用的字符串处理方法写在这里;
utils/AAValidateUtils.js 项目中常用的验证处理方法写在这里;

- 字符串操作
  [JavaScript 字符串操作方法总结(含 ES6 方法) https://blog.csdn.net/shunlu/article/details/83897447](https://blog.csdn.net/shunlu/article/details/83897447)
  [字符串的新增方法 https://es6.ruanyifeng.com/#docs/string-methods](https://es6.ruanyifeng.com/#docs/string-methods)
  [https://www.w3school.com.cn/js/js_string_methods.asp](https://www.w3school.com.cn/js/js_string_methods.asp)

* 数组操作
  [【ES6】操作数组的常用方法有这些就够了 https://www.jianshu.com/p/e1b43e56de08](https://www.jianshu.com/p/e1b43e56de08)

- 对象操作
  [对象的新增方法 https://es6.ruanyifeng.com/#docs/object-methods](https://es6.ruanyifeng.com/#docs/object-methods)

[https://github.com/zloirock/core-js](https://github.com/zloirock/core-js)

---

### 添加路由处理；

#### Menu Layout 使用示例：

// 首次进入和刷新后初始化菜单选中状态

// 监听路由改变并设置菜单选中状态; 用 session 中的某个状态变量控制路由跳转；eg: 这个用户如果没有登录或者登录已过期，那么跳转登录页面；

// 跳转到目标路由 e.key

详见 README2.md

---

### 添加各种 demo 效果；

详见 README2.md

---

### error

---

-

```
ERROR in ./app/assets/images/test.png
Module build failed (from ./node_modules/image-webpack-loader/index.js):
ArgumentError: Expected `options.quality` to be of type `array` but received type `string`
```

这个是因为 image-webpack-loader 版本造成的，更新到最新版本使用方法即可解决
更改为： quality: [0.65, 0.9],

---

- babel-eslint 高版本有问题 可以用 "babel-eslint": "7.2.3",

```
TypeError: Cannot read property 'range' of null
```

[https://github.com/babel/babel-eslint/issues/530](https://github.com/babel/babel-eslint/issues/530)

---
