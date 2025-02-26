import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

const app = createApp(App);


app.mount('#app');

// document.addEventListener('DOMContentLoaded', () => {
//   const loadButton = document.createElement('button');
//   loadButton.textContent = '加载子应用';
//   loadButton.addEventListener('click', loadSubApp);
//   document.body.appendChild(loadButton);
// });
