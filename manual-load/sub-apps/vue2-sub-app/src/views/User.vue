<template>
  <div class="space-y-6">
    <h1 class="text-3xl font-bold text-gray-900">用户中心</h1>
    <div class="bg-white shadow-sm rounded-lg p-6 space-y-4">
      <p class="text-gray-600">这是 Vue2 子应用的用户中心页面</p>
      <div v-if="userId" class="bg-gray-50 rounded-md p-4">
        <h2 class="text-xl font-semibold text-gray-700">用户ID: {{ userId }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    userId: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
/* Remove existing styles */
</style>
