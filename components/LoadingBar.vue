<template>
  <div v-if="loading" class="loading-page">
    <div class="loading-container">
      <div class="loading-logo">
        <em ref="loadingText">HeoPro-v</em>
      </div>
    </div>
  </div>
</template>
<script>
  import Mixin from '../plugins/MyMixin.js'
  import {gsap, power2, power3, power4, Expo  } from "gsap";
  export default {
    data: () => ({
      loading: false,
      counter : 0,
 
    }),
    created(){
      if(!process.server){
        console.log( "ddddddddddddddddddddddd" ); 
      }else{
        console.log( "2222")
      }
    },
    methods: {
      // countStart() {
      //   const timer = setInterval(() => {
      //       this.counter++;      
      //       if( this.counter == 100 ){
      //           console.log( "??" );
      //           clearInterval( timer );
      //           // this.countFinish();
      //       }
      //   }, 50);

      //   this.loading = true;
      // },

      // countFinish() {
      //   this.counter = 0;
      //   this.loading = false;
      // },
      logoAnimations(){
         
      }
    },

    mounted() {
     
      this.logoAnimations();
      this.$nextTick(() => {
        // this.countStart();
      
         
      })
  }

  }
</script>

<style lang="scss">
  .loading-page{ 
    position: fixed; top:0; left:0; width: 100%; height: 100%; background:#fff; z-index: 100;
    .loading-container{
        display: table;
        width: inherit;
        height: inherit;
        text-align: center;
       
        .loading-logo{
          display: table-cell;
           vertical-align: middle;
          font-size:50px;
          color: #000;
        }
      }
    } 
</style>