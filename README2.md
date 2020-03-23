---
### 国际化使用示例：
详见 zzdemos/pages/IntlDemoPage; translations/en.json;

必要时可以查看相关文件 translation/messages.js; i18n.js;
---

### less 使用示例：

详见 zzdemos/pages/LessDemoPage;

---

### 网络请求使用示例：

- 开发新的模块时将 api/services/template 复制到 api/services 目录下，并修改为对应的模块名称，eg: user ;
- 将需要的接口文件加入 index.js;
- 暂时不用的接口可以注释掉;

详见 zzdemos/pages/AxiosDemoPage;

---

### mock 数据使用示例：

- 开发新的版本时将 zzdemos/mocks/template 复制到 app/mocks 目录下，并修改为对应的版本名称，eg: v1.0 ;
- 修改 configs/base/development.js 中的
  ```
    mockable: true,
    mockableVersion: 'v1.0', // 对应 app/mocks 下的目录名称
  ```
- 将需要 mock 的接口数据加入 index.js;
- 暂时不用的 mock 接口可以注释掉;

详见 zzdemos/pages/MockDemoPage;

详见 zzdemos/mocks/template;

---

### antd 使用示例：

详见 zzdemos/pages/AntdDemoPage;

---

### saga redux antd-form 使用示例：

详见 zzdemos/pages/SagaDemoPage;

---

### 初始化应用数据 使用示例：

详见 zzdemos/containers/App;

```
  useEffect(() => {
    /**
     * 在这里做一些初始化操作，这些操作可能有副作用，
     * 所以使用 useEffect saga 等来处理，并将结果
     * 放到session或者redux中；
     * */
    getServerData();
  }, []);
```

---

### pages 新建模板使用示例：

将 zzdemos/pages/TemplateDemoPage 复制到 app/pages 目录下，并修改名称；

详见 zzdemos/pages/TemplateDemoPage;

---

### Menu Layout 使用示例：

// 首次进入和刷新后初始化菜单选中状态

// 监听路由改变并设置菜单选中状态; 用 session 中的某个状态变量控制路由跳转；eg: 这个用户如果没有登录或者登录已过期，那么跳转登录页面；

// 跳转到目标路由 e.key

```
  // 首次进入和刷新后初始化菜单选中状态
  const pathnameInit = window.location.pathname;
  const [pathname, setPathname] = useState([pathnameInit]);

  /**
   * 监听路由改变并设置菜单选中状态；
   * 用session中的某个状态变量控制路由跳转；eg: 这个用户如果没有登录或者登录已过期，那么跳转登录页面；
   *  */
  useEffect(() => {
    let didCancel = false;
    const unlisten = history.listen((location, action) => {
      console.log('listen', location, action);
      // location就是window.location的一个子集
      // action可能的值，"PUSH", "REPLACE", "POP"

      if (didCancel) {
        return;
      }
      // 用session中的某个状态变量控制路由跳转；
      const isLoggedIn = true;
      if (isLoggedIn) {
        setPathname([location.pathname]);
      } else if (location.pathname !== '/demo') {
        history.push('/demo');
        setPathname(['/demo']);
      } else {
        console.log('/demo');
      }
    });
    return () => {
      didCancel = true;
      unlisten();
    };
  }, []);
  function handleClick(e) {
    console.log('click', e);
    // 跳转到目标路由 e.key
    history.push(e.key);
  }
```

详见 zzdemos/pages/MenuDemoPage;

---

### svg png 使用示例

- 在 assets/svg 添加自定义 svg;
- 在文件中使用自定义 svg;

```
import React from 'react';
import Icon, { AppstoreOutlined } from '@ant-design/icons';
import { SuccessSvg } from 'assets/svg';
import image from 'zzdemos/assets/images/test.png';
import image2 from 'zzdemos/assets/images/test2.png';

export default function SvgDemoPage() {
  return (
    <div className="">
      SvgDemoPage
      <AppstoreOutlined style={{ color: 'red', fontSize: 30 }} />
      <Icon
        component={() => SuccessSvg({ color: 'red', width: 30, height: 30 })}
      />
      <img src={image} width={30} height={30} alt="test" />
      <img src={image2} width={30} height={30} alt="test" />
      <img
        src="https://www.baidu.com/img/bd_logo1.png"
        width={30}
        height={30}
        alt="test"
      />
    </div>
  );
}
```

详见 zzdemos/pages/SvgDemoPage;
详见 assets/svg;
详见 zzdemos/assets/images;

---

- 重置 redux 为初始状态 eg: 在登录页需要进行重置；

```
  const rootReducer = (state, action) => {
    // 重置redux为初始状态 eg: 在登录页需要进行重置；
    if (action.type === 'RESET_REDUX') {
      const { language } = state;
      state = { language };
    }
    return appReducer(state, action);
  };

```

---

### 工具类 使用示例：

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

---
