<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <p class="text-rose-500 text-sm font-light my-6">
      手动加载模式下，主应用不会自动处理子应用的路由，子应用的路由变化不会反映到浏览器的 URL 中。
      这种模式更适合将子应用作为一个独立的功能模块或组件来使用
    </p>

    <div class="max-w-4xl mx-auto">
      <!-- 价格卡片网格 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 基础版 -->
        <div class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">基础版</h3>
          <div class="text-3xl font-bold text-primary-600 mb-4">¥99<span class="text-sm text-gray-500">/月</span></div>
          <ul class="space-y-3 mb-6">
            <li class="flex items-center text-gray-600">
              <svg class="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              基础功能支持
            </li>
            <li class="flex items-center text-gray-600">
              <svg class="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              5GB 存储空间
            </li>
            <li class="flex items-center text-gray-600">
              <svg class="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              每月 100GB 流量
            </li>
          </ul>
          <button class="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors">
            选择方案
          </button>
        </div>

        <!-- 专业版 -->
        <div class="bg-white rounded-lg shadow-sm p-6 border-2 border-primary-500 hover:shadow-md transition-shadow">
          <div class="absolute top-0 right-0 bg-primary-500 text-white px-3 py-1 text-sm rounded-bl-lg">推荐</div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">专业版</h3>
          <div class="text-3xl font-bold text-primary-600 mb-4">¥199<span class="text-sm text-gray-500">/月</span></div>
          <ul class="space-y-3 mb-6">
            <li class="flex items-center text-gray-600">
              <svg class="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              所有基础版功能
            </li>
            <li class="flex items-center text-gray-600">
              <svg class="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              20GB 存储空间
            </li>
            <li class="flex items-center text-gray-600">
              <svg class="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              每月 500GB 流量
            </li>
          </ul>
          <button class="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors">
            选择方案
          </button>
        </div>

        <!-- 企业版 -->
        <div class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">企业版</h3>
          <div class="text-3xl font-bold text-primary-600 mb-4">¥499<span class="text-sm text-gray-500">/月</span></div>
          <ul class="space-y-3 mb-6">
            <li class="flex items-center text-gray-600">
              <svg class="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              所有专业版功能
            </li>
            <li class="flex items-center text-gray-600">
              <svg class="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              100GB 存储空间
            </li>
            <li class="flex items-center text-gray-600">
              <svg class="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              无限流量
            </li>
          </ul>
          <button class="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors">
            选择方案
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
const onClick = function () {
  count.value++
}
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>
