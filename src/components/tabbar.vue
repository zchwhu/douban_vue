<template>
  <div class="db-tabbar">
    <slot></slot>
  </div>
</template>
<style scoped lang="less" rel="stylesheet/less">
  .db-tabbar{
    display: flex;
    flex-direction: row;
    overflow: hidden;

    position: fixed;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 50px;

    background: #fff;
    border-top: 1px solid #e4e4e4;
  }
</style>
<script scoped type="text/ecmascript-6">
  export default {
    props: ['value']
  }
</script>
