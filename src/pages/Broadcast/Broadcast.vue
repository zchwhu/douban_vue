<template>
  <db-header title="广播">
    <a class="db-back" slot="left"></a>
    <span class="db-btn-group" slot="right">
      <a>
        <img src="../../assets/images/ic_group_search.png">
      </a>
      <a>
        <img src="../../assets/images/ic_status_search_user.png">
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
