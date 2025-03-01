import { createApp } from 'vue';
// import './style.css';
import './public-path.js';
import App from './App.vue';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

let instance = null;

function render(props = {}) {
  const { container } = props;
  instance = createApp(App);
  instance.mount(container ? container.querySelector('#app') : '#app');
}

renderWithQiankun({
  bootstrap() {
    console.log('Vue3 子应用 bootstraped');
  },
  mount(props) {
    console.log('Vue3 子应用 mounted', props);
    render(props);
  },
  unmount() {
    console.log('Vue3 子应用 unmounted');
    if (instance) {
      instance.unmount();
      instance = null;
    }
  }
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
