import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import { ElementTiptapPlugin } from 'element-tiptap';
import 'element-tiptap/lib/index.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'lib-flexible'

Vue.use(ElementUI);
Vue.use(ElementTiptapPlugin, { lang: 'zh' });
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')