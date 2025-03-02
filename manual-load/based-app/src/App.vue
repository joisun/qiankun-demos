<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="py-4 text-2xl font-semibold text-gray-900">主应用</h1>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div class="flex gap-6">
        <!-- 侧边栏 -->
        <div class="w-64 flex-shrink-0">
          <div class="bg-white rounded-lg shadow-sm">
            <ul class="divide-y divide-gray-200">
              <li v-for="(menu, index) in SUB_APPS_CONFIG" :key="index">
                <button @click="menuChange(menu)" class="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                  :class="{ 'text-primary-600 bg-primary-50': menu.name === activeMenu }">
                  {{ menu.label }}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <!-- 内容区 -->
        <div class="flex-1 bg-white rounded-lg shadow-sm min-h-[500px]">
          <div id="mount-point" class="p-6"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { loadMicroApp, prefetchApps } from 'qiankun'

const SUB_APPS_CONFIG = [
  {
    name: 'vue2-sub-app',
    label: 'Vue2 子应用',
    entry: '//localhost:8001',
    container: '#mount-point',
    activeRule: '/app1',
    props: {}
  },
  {
    name: 'vue3-sub-app',
    label: 'Vue3 子应用',
    entry: '//localhost:8002',
    container: '#mount-point',
    activeRule: '/app2',
    props: {}
  }
]

const activeMenu = ref('vue2-sub-app')
let subApp = null

const menuChange = (menu) => {
  activeMenu.value = menu.name
  loadApp(menu.name)
}

const loadApp = async (appName) => {
  if (subApp) {
    await subApp.unmount()
    subApp = null
  }

  const CONFIG = SUB_APPS_CONFIG.find((v) => v.name === appName)
  if (!CONFIG) {
    console.log('未知的子应用名称')
    return
  }

  subApp = loadMicroApp(CONFIG, {
    //https://qiankun.umijs.org/zh/api#%E6%89%8B%E5%8A%A8%E5%8A%A0%E8%BD%BD%E5%BE%AE%E5%BA%94%E7%94%A8
    sandbox: {
      // strictStyleIsolation: true, // 严格沙箱
      experimentalStyleIsolation: true // 实验性沙箱: 当 experimentalStyleIsolation 被设置为 true 时，qiankun 会改写子应用所添加的样式为所有样式规则增加一个特殊的选择器规则来限定其影响范围
    }
  })
}

onMounted(() => {
  prefetchApps(SUB_APPS_CONFIG)
  menuChange(SUB_APPS_CONFIG[0])
})
</script>
