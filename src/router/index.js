import Vue from 'vue';
import Router from 'vue-router';
import AsyncWrappedComponent from '@/utils/AsyncComponent.js';

const Detail = () => AsyncWrappedComponent('detail');
const Index = () => AsyncWrappedComponent('index');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
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