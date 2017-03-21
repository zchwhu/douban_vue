<template>
  <a class="db-tabbar-item" @click="tabbarSelect" :class="{'active':isActive}">
    <i class="db-tabbar-item-icon" v-show="!isActive">
      <slot name="icon-normal"></slot>
    </i>
    <i class="db-tabbar-item-icon" v-show="isActive">
      <slot name="icon-active"></slot>
    </i>
    <span class="db-tabbar-item-text">
      <slot></slot>
    </span>
  </a>
</template>
<style scoped lang="less" rel="stylesheet/less">
  .db-tabbar-item{
    flex: 1;
    text-align: center;
    &.active{
      .db-tabbar-item-text{
        color: #42bd56;
      }
    }
  }
  .db-tabbar-item-icon{
    display: block;
    padding-top: 2px;
    img{
      width: 28px;
      height: 28px;
    }
  }
  .db-tabbar-item-text{
    display: block;
    font-size: 10px;
    color: #949494;
  }
</style>
<script type="text/ecmascript-6">
  export default {
    props: {
      id:{
        type: String
      },
      isRouter: {
        type: Boolean,
        default: false
      }
    },
    computed:{
      isActive(){
        if(this.$parent.value === this.id){
          return true;
        }
      }
    },
    methods: {
      tabbarSelect(){
        this.$parent.$emit('input',this.id);
        if(this.isRouter){
          this.$router.push(this.id);
        }

      }
    }
  }
</script>
