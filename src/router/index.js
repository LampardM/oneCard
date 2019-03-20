import Vue from 'vue';
import Router from 'vue-router';
import AsyncWrappedComponent from '@/utils/AsyncComponent.js';

const Index = () => AsyncWrappedComponent('index');
const Detail = () => AsyncWrappedComponent('detail');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})