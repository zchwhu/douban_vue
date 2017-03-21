<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
      <img src="./banner1.jpg" class="swiper-item">
    </swiper-slide>
    <swiper-slide>
      <img src="./banner2.jpg" class="swiper-item">
    </swiper-slide>
    <swiper-slide>
      <img src="./banner3.jpg" class="swiper-item">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<style lang="less" rel="stylesheet/less">
  .swiper-item{
    width: 100%;
    height: 100px;
  }

  .swiper-container .swiper-pagination-fraction,
  .swiper-container .swiper-pagination-custom,
  .swiper-container.swiper-container-horizontal > .swiper-pagination-bullets{
    position: absolute;
    left: -20px;
    bottom: 15px;
    text-align: right;
  }

  .swiper-container .swiper-pagination-bullet{
    width: 5px;
    height: 5px;
    &.swiper-pagination-bullet-active{
      background-color: #fff;
    }
  }

  .swiper-container.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
    margin: 0 3px;
  }
</style>
<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    components: {
      swiper,
      swiperSlide
    },
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay : 2000,
          direction : 'horizontal',
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
          debugger: true,
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
  }
</script>
