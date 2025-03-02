import { createApp } from 'vue';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import App from './App.vue';
import './public-path.js';
import './assets/tailwind.css';

let app;

function render(props = {}) {
  const { container } = props;
  app = createApp(App);
  
  app.mount(container ? container.querySelector('#app') : '#app');
}

renderWithQiankun({
  mount(props) {
    console.log('vue3sub mount');
    render(props);
  },
  bootstrap() {
    console.log('vue3sub bootstrap');
  },
  unmount(props) {
    console.log('vue3sub unmount');
    app.unmount();
  },
  update(props) {
    console.log('vue3sub update');
    console.log(props);
  }
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
