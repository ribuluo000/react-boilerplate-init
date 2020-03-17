




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

