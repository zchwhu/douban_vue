<template>
  <div id="app">
    <router-view></router-view>

    <db-tabbar v-model="select">
      <db-tabbar-item id="Index" isRouter>
        <img src="./assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal">
        <img src="./assets/images/ic_tab_home_active.png" alt="" slot="icon-active">
        <span>首页</span>
      </db-tabbar-item>
      <db-tabbar-item id="BookMovieMusic" isRouter>
        <img src="./assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal">
        <img src="./assets/images/ic_tab_subject_active.png" alt="" slot="icon-active">
        <span>书影音</span>
      </db-tabbar-item>
      <db-tabbar-item id="Broadcast" isRouter>
        <img src="./assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal">
        <img src="./assets/images/ic_tab_status_active.png" alt="" slot="icon-active">
        <span>广播</span>
      </db-tabbar-item>
      <db-tabbar-item id="Group" isRouter>
        <img src="./assets/images/ic_tab_group_normal.png" alt="" slot="icon-normal">
        <img src="./assets/images/ic_tab_group_active.png" alt="" slot="icon-active">
        <span>小组</span>
      </db-tabbar-item>
      <db-tabbar-item id="Mine" isRouter>
        <img src="./assets/images/ic_tab_profile_normal.png" alt="" slot="icon-normal">
        <img src="./assets/images/ic_tab_profile_active.png" alt="" slot="icon-active">
        <span>我的</span>
      </db-tabbar-item>
    </db-tabbar>
  </div>
</template>

<script type="text/ecmascript-6">

import dbTabbar from './components/tabbar.vue'
import dbTabbarItem from './components/tabbar_item.vue'

export default {
  name: 'app',
  components:{
    dbTabbar,
    dbTabbarItem
  },
  data() {
    return {
      select:"Index"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
