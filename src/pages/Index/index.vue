<template>
  <div class="container">
    <db-search-header>
      <div slot="search-main" class="db-search-wrapper">
        <span class="search">
          <img src="../../assets/images/ic_group_tab_search.png">
        </span>
        <span class="text">影视 图书 唱片 小组等</span>
        <span class="scan">
          <img src="../../assets/images/ic_scan_gray.png">
        </span>
      </div>
      <div slot="search-aside" class="db-search-aside">
        <img src="../../assets/images/ic_chat_white.png">
      </div>
    </db-search-header>
    <db-swiper></db-swiper>
  </div>
</template>
<style scoped lang="less" rel="stylesheet/less">
  .db-search-wrapper{
    display: flex;
    flex-direction: row;
    flex: 1;

    padding: 4px;
    margin-right: 8px;

    border-radius: 5px;
    background-color: #fff;

    .search,
    .scan{
      display: inline-block;
      img{
        width: 100%;
        height: 100%;
      }
    }

    .search{
      width: 16px;
      height: 16px;
    }

    .scan{
      width: 14px;
      height: 14px;
      margin-top: 1px;
      margin-right: 3px;
    }

    .text{
      display: block;
      flex: 1;
      margin-left: 5px;
      line-height: 16px;
      font-size: 12px;
      color: #ccc;
    }
  }

  .db-search-aside{
    width: 24px;
    height: 24px;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
<script type="text/ecmascript-6">
  import dbSearchHeader from '../../components/search_header.vue'
  import dbSwiper from '../../components/swiper/swiper.vue'

  export default {
    components: {
      dbSearchHeader,
      dbSwiper
    }
  }
</script>
