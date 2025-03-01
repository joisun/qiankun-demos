const themeList = [
  {
    name: 'vue2-sub-app',
    label: 'vue2 子应用',
    entry: '//localhost:8001',
    container: '#sub-vue2-container',
    component: () => import('@/theme/vue2App.vue'),
    permission: 'sub_vue2_app',
    props: {}
  },
  {
    name: 'vue3-sub-app',
    label: 'vue3 子应用',
    entry: '//localhost:8002',
    container: '#sub-vue3-container',
    component: () => import('@/theme/vue3App.vue'),
    permission: 'sub_vue3_app',
    props: {}
  }
];

export default themeList;