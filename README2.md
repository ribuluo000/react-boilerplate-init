




---

### 国际化使用示例：
详见 zzdemos/pages/IntlDemoPage; translations/en.json;

必要时可以查看相关文件 translation/messages.js; i18n.js;


---

### less使用示例：
详见 zzdemos/pages/LessDemoPage;

---

### 网络请求使用示例：
详见 zzdemos/pages/AxiosDemoPage;

---

### mock数据使用示例：

- 开发新的版本时将 zzdemos/mocks/template 复制到 app/mocks 目录下，并修改为对应的版本名称，eg: v1.0 ;
- 修改 configs/base/development.js 中的 
  ```
    mockable: true,
    mockableVersion: 'v1.0', // 对应 app/mocks 下的目录名称
  ```
- 将需要mock的接口数据加入index.js;
- 暂时不用的mock接口可以注释掉;


详见 zzdemos/pages/MockDemoPage;

详见 zzdemos/mocks/template;

---
### antd使用示例：
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

// 监听路由改变并设置菜单选中状态

// 跳转到目标路由 e.key


```
  // 首次进入和刷新后初始化菜单选中状态
  const pathnameInit = window.location.pathname;
  const [pathname, setPathname] = useState([pathnameInit]);

  // 监听路由改变并设置菜单选中状态
  useEffect(() => {
    let didCancel = false;
    const unlisten = history.listen((location, action) => {
      console.log('listen', location, action);
      // location就是window.location的一个子集
      // action可能的值，"PUSH", "REPLACE", "POP"

      if (didCancel) {
        return;
      }
      setPathname([location.pathname]);
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

### svg 使用示例

- 在 assets/svg 添加自定义svg;
- 在文件中使用自定义svg;

```
import React from 'react';
import Icon, { AppstoreOutlined } from '@ant-design/icons';
import { SuccessSvg } from 'assets/svg';

export default function SvgDemoPage() {
  return (
    <div className="">
      SvgDemoPage
      <AppstoreOutlined style={{ color: 'red', fontSize: 30 }} />
      <Icon
        component={() => SuccessSvg({ color: 'red', width: 30, height: 30 })}
      />
    </div>
  );
}
```

详见 zzdemos/pages/SvgDemoPage;
详见 assets/svg;

---

- 重置redux为初始状态 eg: 在登录页需要进行重置；
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


