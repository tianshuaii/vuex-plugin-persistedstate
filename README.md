# vuex-plugin-persistedstate

持久化 vuex 状态

## 下载

```bash
npm i tbc-vuex-plugin-persistedstate
```

## 使用

```javascript
import persistedstate from "tbc-vuex-plugin-persistedstate"

plugins: [
  persistedstate({
    key: "vx-store", // 存储的key
    storageType: window.sessionStorage, // 存储类型
    immediately: true, // 是否立即加载，默认为false表示beforeunload时触发存储
  }),
]
```
