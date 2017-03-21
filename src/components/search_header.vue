<template>
  <div class="db-search-header">
    <slot name="search-main"></slot>
    <slot name="search-aside"></slot>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  @import "../assets/less/variables";

  .db-search-header{
    display: flex;
    flex-direction: row;

    width: 100%;
    height: @headerHeight;
    padding: 10px;
    box-sizing: border-box;

    background-color: @headerBg;
  }
</style>
<script type="text/ecmascript-6">

</script>
