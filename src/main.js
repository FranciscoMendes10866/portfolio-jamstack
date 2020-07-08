import Vue from 'vue'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

import App from './App.vue'
import router from './router'
import './assets/css/styles.main.css'
import './assets/css/tailwind.css'

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    uri: 'https://api-eu-central-1.graphcms.com/v2/ckcdct4ib0fdx01z25e68bkxi/master'
  })
})

Vue.use(VueApollo)

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
