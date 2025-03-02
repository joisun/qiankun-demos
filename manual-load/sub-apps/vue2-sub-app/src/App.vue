<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm">
      <p class="text-rose-500 text-sm font-light my-6">
        这里的切换是通过动态组件实现的。并不是基于路由的。 因为手动加载模式下，子应用是被当作一个组件手动加载到指定容器中的，不会跟随 URL 变化自动切换</p>

      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-center space-x-8 py-4">
          <a href="#" @click.prevent="currentView = 'Home'" class="text-sm font-medium transition-colors duration-200"
            :class="currentView === 'Home' ? 'text-primary-600' : 'text-gray-500 hover:text-gray-900'">
            首页
          </a>
          <a href="#" @click.prevent="currentView = 'About'" class="text-sm font-medium transition-colors duration-200"
            :class="currentView === 'About' ? 'text-primary-600' : 'text-gray-500 hover:text-gray-900'">
            关于
          </a>
          <a href="#" @click.prevent="showUser(1)" class="text-sm font-medium transition-colors duration-200"
            :class="currentView === 'User' && userId === 1 ? 'text-primary-600' : 'text-gray-500 hover:text-gray-900'">
            用户1
          </a>
          <a href="#" @click.prevent="showUser(2)" class="text-sm font-medium transition-colors duration-200"
            :class="currentView === 'User' && userId === 2 ? 'text-primary-600' : 'text-gray-500 hover:text-gray-900'">
            用户2
          </a>
        </div>
      </div>
    </nav>

    <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <component :is="currentView" :user-id="userId"></component>
    </main>

  </div>
</template>

<script>
import Home from './views/Home.vue'
import About from './views/About.vue'
import User from './views/User.vue'

export default {
  name: 'App',
  components: {
    Home,
    About,
    User
  },
  data() {
    return {
      currentView: 'Home',
      userId: null
    }
  },
  methods: {
    showUser(id) {
      this.currentView = 'User'
      this.userId = id
    }
  }
}
</script>
