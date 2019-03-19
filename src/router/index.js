import Vue from 'vue'
import Router from 'vue-router'

const pages = [
  'Index'
]

Vue.use(Router)

export default new Router((pages => {
  return {
    routes: (pages => [{
      path: '',
      redirect: `/${pages[0]}`
    }].concat(pages.map(page => {
      return {
        path: `/${page}`,
        name: page,
        component: resolve => require([`@/pages/${page}`], resolve)
      }
    }))
    )(pages)
  }
})(pages))