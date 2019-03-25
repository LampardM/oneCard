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
    this.$dialog({
      title: "确定删除此订单？",
      content: "删除后将从你的记录里消失，无法找回"
    });
  },
  methods:{}
}
</script>

<style scoped>
.bind-wrap {
  background: #fff;
  height: 100%;
}
</style>