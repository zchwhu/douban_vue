<template>
  <transition name="fade">
    <div class="db-welcome" v-show="timing>0">
      <div class="db-timing">
        跳过{{timing}}
      </div>
      <div class="db-welcome-main">
        <div class="icon">: )</div>
        <div class="text">
          <p>{{date}}</p>
          <p>遇见你，真美好</p>
        </div>
      </div>
      <div class="db-welcome-footer">
        <img src="../assets/images/ic_launcher.png" class="logo">
        <div class="text">
          <p class="slogan">我们的精神角落</p>
          <p class="version">豆瓣 4.13.0</p>
        </div>
      </div>
    </div>
  </transition>
</template>
<style lang="less" rel="stylesheet/less">
  @import "../assets/less/variables";

  .db-welcome{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100%;
    height: 100%;

    background-color: #fff;
  }

  .db-timing{
    position: absolute;
    top: 20px;
    right: 30px;

    width: 50px;
    line-height: 25px;

    text-align: center;
    font-size: 12px;
    color: #c3c3c3;

    border: 1px solid #eee;
    border-radius: 5px;
  }

  .db-welcome-main{
    margin: 150px auto 0;
    .icon{
      margin-bottom: 30px;

      text-align: center;
      font-size: 60px;
      color: @basicColor;
    }
    .text{
      line-height: 25px;

      text-align: center;
      font-size: 13px;
      color: #5d5d5d;
    }
  }

  .db-welcome-footer{
    display: flex;
    justify-content: center;

    position: fixed;
    left: 0;
    bottom: 20px;

    width: 100%;
    .logo{
      width: 40px;
      height: 40px;

      margin-right: 5px;
    }
    .text{
      .slogan{
        line-height: 23px;
        font-size: 14px;
        font-weight: bolder;
        color: #3d3d3d;
      }
      .version{
        line-height: 15px;
        font-size: 12px;
        color: #888;
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>
<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        timing: 3
      }
    },
    computed:{
      date() {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth()+1;
        var date = today.getDate();
        var day = (function (time) {
          switch (time){
            case 0:{
              return '日'
            }
            case 1: {
              return '一'
            }
            case 2: {
              return '二'
            }
            case 3: {
              return '三'
            }
            case 4: {
              return '四'
            }
            case 5: {
              return '五'
            }
            case 6: {
              return '六'
            }
          }
        })(today.getDay());
        return year+' 年 '+month+' 月 '+date+' 日, 星期'+day;
      }
    },
    mounted(){
      if(this.timing>0){
        var that = this;
        setInterval(function () {
          that.timing--;
        },1000);
      }
    }
  }
</script>
