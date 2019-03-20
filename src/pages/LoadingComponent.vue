<template>
  <div class="loading-wrapper">
    <div>加载失败</div>
  </div>
</template>

<script>
export default {
  name: 'LoadingComponent',
  components: {},
  data() {
    return {
      
    }
  },
}
</script>

<style scoped>
  .loading-wrapper {
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .1;
  }
</style>
