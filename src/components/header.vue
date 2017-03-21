<template>
  <div class="db-header">
    <slot name="left"></slot>
    <span class="db-title" v-text="title"></span>
    <slot name="right"></slot>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  @import "../assets/less/variables";
  .db-header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 44px;
    padding: 0 10px;

    background-color: @headerDefaultBg;
    border-bottom: 1px solid #e4e4e4;
  }
  .db-back{
    display: block;
    width: 70px;
    height: 20px;
    img{
      width: 20px;
      height: 20px;
    }
  }
  .db-btn-group{
    display: flex;
    flex-direction: row;
    width: 70px;
    justify-content: flex-end;
    a{
      display: block;
      width: 20px;
      height: 20px;
      &+a{
        margin-left: 10px;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
  }

  .db-title{
    flex: 1;
    text-align: center;
  }
</style>
<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>
