<template>
  <div class="bind-wrap">
    <div class="bind-image"></div>
    <div class="bind-account">
      <input placeholder="请输入用户名" />
      <div>立即绑定</div>
    </div>
  </div>
</template>

<script>
 
import oneCardStorage from '../utils/storage.js';

export default {
  name: 'binding',
  components: {},
  data(){
    return {
      cardnum: 0,
      show: true,
    }
  },
  mounted() {
    
  },
  methods:{
    
  }
}
</script>

<style scoped>
.bind-wrap {
  background: #fff;
  height: 100%;
}
</style>