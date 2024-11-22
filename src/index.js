const myPlugin = (options) => {
  return (store) => {
    const { key, immediately, storageType } = options
    const KEY = key || "VUEX_STORE"
    const storageMap = {
      sessionStorage: sessionStorage,
      localStorage: localStorage,
    }
    const STORAGE = storageMap[storageType] || localStorage // 默认使用 localStorage

    if (immediately) {
      // 仓库数据实时同步到本地存储
      store.subscribe((mutation, state) => {
        STORAGE.setItem(KEY, JSON.stringify(state))
      })
    } else {
      // 页面刷新时，存储仓库数据
      window.addEventListener("beforeunload", () => {
        STORAGE.setItem(KEY, JSON.stringify(store.state))
      })
    }

    // 恢复仓库数据
    try {
      const localState = STORAGE.getItem(KEY)
      if (localState) store.replaceState(JSON.parse(localState))
    } catch {
      console.log("数据恢复失败")
    }
  }
}

export default myPlugin
