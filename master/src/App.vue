<template>
  <h1>主应用</h1>
  <button @click="loadSubAppVue2">加载 vue2 子应用</button>
  <button @click="loadSubAppVue3">加载 vue3 子应用</button>
  <div class="box">
    <div id="sub-vue2-container"></div>
    <div id="sub-vue3-container"></div>
  </div>
</template>

<script setup>
import { loadMicroApp } from 'qiankun';

console.log(loadMicroApp);
// 手动加载子应用函数
const loadSubAppVue2 = () => {
  loadMicroApp({
    name: 'vue2-sub-app',
    entry: '//localhost:8001',
    container: '#sub-vue2-container',
    props: {}
  });
};

const loadSubAppVue3 = () => {
  loadMicroApp({
    name: 'vue3-sub-app',
    entry: '//localhost:8002',
    container: '#sub-vue3-container',
    props: {}
  });
};

</script>

<style scoped>
.box {
  display: flex;
}

.box div {
  flex: 1;
  border: 1px solid red;
  height: 200px;
}
</style>
