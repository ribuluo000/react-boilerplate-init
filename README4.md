# 项目简介

### dependencies：

---

#### 路由

- react-router-dom

```
DOM bindings for React Router.

browserHistory,Switch,Route,

```

- connected-react-router

```
A Redux binding for React Router

connectRouter,ConnectedRouter,routerMiddleware

```

- history

```
The history library lets you easily manage session history anywhere JavaScript runs.

createBrowserHistory,
history.push('/demo'),

```

- react-router-dom express

```
使用 browserHistory
并使用 express 开启node服务，通过使用通配符*监听所有请求，返回目标html文档，实现刷新页面后可以正常显示

如果清空缓存并刷新仍然会有404异常，这个时候需要后端服务器配置使用通配符*监听所有请求，返回目标html文档，就可以正常显示了。
```

---

#### 国际化

- react-intl、intl、 用于国际化处理

---

#### 数据管理

- redux
- react-redux

```
Official React bindings for Redux.
Performant and flexible.

Provider,connect,

```

```
重置redux为初始状态 eg: 在登录页需要进行重置；
```

---

#### 不可变数据处理

- immer 通过简单地修改当前树来创建下一个不可变状态树

```
Create the next immutable state tree by simply modifying the current tree

https://immerjs.github.io/immer/docs/introduction

```

---

#### 副作用（异步）

- redux-saga、

```
redux-saga 是一个用于管理应用程序 Side Effect（副作用，例如异步获取数据，访问浏览器缓存等）的 library

import { call, put, select, takeLatest } from 'redux-saga/effects';

```

---

#### 高阶组件处理

- hoist-non-react-statics 高阶组件处理

```
自动把所有绑定在对象上的非React方法都绑定到新的对象上

Copies non-react specific statics from a child component to a parent component. Similar to Object.assign, but with React static keywords blacklisted from being overridden.

```

---

#### UI 库

- antd

##### 图表显示

- echarts 用于图表显示

---

#### 精准计算

- bignumber.js

---

#### 基础样式最佳实践

- sanitize.css

```
sanitize.css是一个CSS库，可提供一致的跨浏览器的HTML元素默认样式以及有用的默认样式。

sanitize.css is a CSS library that provides consistent, cross-browser default styling of HTML elements alongside useful defaults.
```

---

#### 样式编写

- less less-loader 使用 less 编写样式

```
https://github.com/react-boilerplate/react-boilerplate/blob/master/docs/css/README.md#less
```

---

#### 网络请求

- axios

```
Promise based HTTP client for the browser and node.js

```

---

### devDependencies：

@babel/plugin-syntax-dynamic-import、
@babel/plugin-proposal-class-properties、

---

#### 支持 svg 作为组件使用

- @svgr/webpack

```
Webpack loader for SVGR.

```

---

#### mock 数据

- mockjs

```
mock 数据，让前端不在等待后端接口
```

---

#### 检查和纠错工具

##### 样式语法检查和纠错工具

vscode

<!--
- stylelint
- stylelint-config-recommended
- stylelint-config-styled-components
- stylelint-processor-styled-components
 -->

##### 使用 ESLint+Prettier + pre-commit(pretty-quick husky) 来统一前端代码风格 (.js,.less,.json)

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

参考：
https://prettier.io/

https://prettier.io/docs/en/precommit.html#option-2-pretty-quickhttpsgithubcomazzpretty-quick

---

#### 兼容性

- react-app-polyfill 兼容 ie11

```
该软件包包括适用于各种浏览器的polyfill。
它包括Create React App项目使用的最低要求和常用语言功能。

This package includes polyfills for various browsers. It includes minimum requirements and commonly used language features used by Create React App projects.


```

---

---

#### 打包优化

##### dependencies：

- cross-env 多渠道打包

```
使用 cross-env 设置变量的不同值，实现不同环境的打包发布;
```

##### devDependencies：

- babel-plugin-lodash 减小打包后的包大小

```
A simple transform to cherry-pick Lodash modules so you don’t have to.

Combine with lodash-webpack-plugin for even smaller cherry-picked builds!
```

- clean-webpack-plugin 清除打包的老版本文件

- compression-webpack-plugin 实现 gzip 压缩

- terser-webpack-plugin 实现 js 压缩

```
This plugin uses terser to minify your JavaScript.

```

- webpack

```
build 之后如果代码没有改变那么hash是一样的，所以如果第三方依赖如果没有升级，那么打包之后的结果是一样的；将打包结果拆分为多个文件，减少了每次打包后不一样的文件的数量，使大部分文件保持一致。
```

- webpack-hot-middleware, webpack-dev-middleware 实现开发时的热加载功能

```
我们在使用webpack 编译文件时，每次改动文件都要去重新编译，是不是很麻烦，这时候我们就用到了webpack-dev-middleware 插件，该插件对更改的文件进行监控，编译, 一般和 webpack-hot-middleware 配合使用，实现热加载功能
```

---

# 具体实现可以查看项目中相关代码，也可以自行搜索。
