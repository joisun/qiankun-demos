// import './public-path.js';
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let instance = null;
function render(props = {}) {
  const { container } = props;
  // router = new VueRouter({
  //   base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/',
  //   mode: 'history',
  //   routes,
  // });

  // console.log('container----', container);

  instance = new Vue({
    // router,
    // store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('Vue2 子应用 bootstraped');
}
export async function mount(props) {
  console.log('Vue2 子应用 mount', props);
  render(props);
}
export async function unmount() {
  console.log('Vue2 子应用 unmount');
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  // router = null;
}