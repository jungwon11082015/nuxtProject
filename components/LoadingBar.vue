<template>
  <div v-show="loading" class="loading-page">
    <div class="loading-content">
      <div class="loading-box">
        <em ref="textTarget">HeoPro-v</em>
      </div>
    </div>
  </div>
</template>
<script>
  import Mixin from '../plugins/MyMixin.js'
  import {gsap, Power0, Power2, Power3, Power4, Expo, Bounce, Back, Elastic, SlowMo,  TweenLite  } from "gsap";
  export default {
    data: () => ({
      loading: true,
      counter : 0,
      isLoadingCheck:false
 
    }),
    created(){
    
    },
    methods: {
      textShow(){
        let textElm = this.$refs.textTarget;
        let _this = this;

        let tl = gsap.timeline(); 
        //create the timeline
        tl.fromTo(textElm, 0.6, {scale:1.4, y:0, x:0, opacity:0, ease:Expo.easeIn}, { scale:0.35, y:0, x:0, opacity:1 })
        .to( textElm, 0.6, {scale:1.4, y:0, x:0, opacity:0,  ease:Expo.easeOut, delay:1, onComplete:  _this.complete })
      },

      complete(){
        this.isLoadingCheck = true;
        this.$nuxt.$emit('eventBusLoadingCheck', this.isLoadingCheck);
        this.loading = false;
      }

    },
    mounted(){
      this.$nextTick(() => {
        this.textShow();
      })
    },

    destroyed() {
      console.log( "destroyed" );
      this.isLoadingCheck = false;
      this.loading = true;
    },

    destroyed() {
      console.log( "destroyed" );
      this.isLoadingCheck = false;
      this.loading = true;
    },
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/reset";
  @import "~assets/scss/function";
  //사용법
      //@include toRem(width, 400);
  //
  .loading-page{ 
    position: fixed; top:0; left:0; width: 100%; height: 100%; background:#fff; z-index: 100; 
    .loading-content{ 
      position: relative;
      display: table;
      width: inherit; height: inherit;
      text-align: center;
      .loading-box{
        display: table-cell; vertical-align: middle;
        em{
          display: inline-block;
          @include toRem(font-size, 160);
          @include toRem( letter-spacing, 5);
          opacity: 0;
          font-family: 'Anton', sans-serif;
          font-weight: 400;
          font-display: block;
        }

      }
        
    }
  }
</style>