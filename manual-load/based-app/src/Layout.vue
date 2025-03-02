<template>
  <div class="panel">
    <div class="header">
      <h1>主应用</h1>
    </div>
    <div class="container">
      <ul class="menu">
        <li v-for="(menu, index) in SUB_APPS" :key="index" class="menu-item" :class="{
          'active': menu.name === activeMenu
        }" @click="menuChange(menu)">
          {{ menu.label }}
        </li>
      </ul>
      <div class="content">
        <div id="mount-point"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { loadMicroApp, prefetchApps } from 'qiankun';
import { onMounted, ref } from 'vue';

const SUB_APPS = [
  {
    name: 'vue2-sub-app',
    label: 'vue2 子应用',
    entry: '//localhost:8001',
    container: '#mount-point',
    props: {}
  },
  {
    name: 'vue3-sub-app',
    label: 'vue3 子应用',
    entry: '//localhost:8002',
    container: '#mount-point',
    props: {}
  }
];

const activeMenu = ref('vue2-sub-app');
const menuChange = (menu) => {
  activeMenu.value = menu.name;
  loadApp(menu.name);
};

let subApp = null;
const loadApp = async (appName) => {
  if (subApp) {
    subApp.unmount(); //  卸载之前的子应用
    subApp = null;
  }

  const theme = SUB_APPS.find((v) => v.name === appName);

  if (!theme) {
    console.log('未知的子应用名称');
    return;
  }
  subApp = loadMicroApp(theme)
};



onMounted(() => {
  prefetchApps(SUB_APPS.filter(v => v.entry));
  menuChange(SUB_APPS[0]);
});
</script>

<style scoped lang="less">
.panel {
  .header {
    text-align: center;
    padding: 15px 0;
    border-bottom: 1px solid @border-color;
  }

  .container {
    display: flex;
    height: calc(100vh - 79px);

    .menu {
      width: 200px;
      border-right: 1px solid @border-color;

      .menu-item {
        font-size: @font-size-base;
        padding: 15px 15px;
        color: @default-color;
        cursor: pointer;
        border-bottom: 1px solid @border-color;

        &.active {
          color: @primary-color;
        }
      }
    }

    .content {
      flex: 1;
    }
  }
}
</style>
