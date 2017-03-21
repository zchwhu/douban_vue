<template>
  <db-header title="我的">
    <a class="db-back" slot="left"></a>
    <span class="db-btn-group" slot="right">
      <a>
        <img src="../../assets/images/ic_settings.png">
      </a>
    </span>
  </db-header>
</template>
<style lang="less" rel="stylesheet/less">

</style>
<script type="text/ecmascript-6">
  import dbHeader from '../../components/header.vue'

  export default {
    components: {
      dbHeader
    }
  }
</script>
