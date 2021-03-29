import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 第三方库/插件
import './plugins/mavonEditor'

import './assets/reset.scss'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
