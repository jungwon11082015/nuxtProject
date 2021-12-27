<template>
  <div v-show="loading" class="loading-page">
    <div id="holder">
	  		<div id="slogans">
		  		<p class="slogan"><strong>TWEENMAX</strong></p>
		  		<p class="slogan"><strong>IS GREAT</strong></p>
		  		<p class="slogan"><strong>YOU CAN</strong></p>
		  		<p class="slogan"><strong>ANIMATE</strong></p>
		  		<p class="slogan"><strong>EVERYTHING</strong></p>
		  		<p class="slogan"><strong>WITH</strong></p>
	  		</div>
    </div>
  </div>
</template>
<script>
  export default {
    data: () => ({
      loading: true,
      counter : 0,
      num:0,
    }),
 
    methods: {

      loadingShow(){
          const _this = this;
          const slogans = document.querySelectorAll( ".slogan > strong" );
          const slogansArray = Array.from(slogans);
          const holder = document.getElementById( "holder" );
      
          for (const element of slogansArray) {
            element.parentElement.setAttribute("style","position:abolute; top:0px; left:0px");
          }

        _this.switchSlogan( slogansArray );

          // slogans.parentNode.style({position : "absolute", top:"0px", left:"0px"});
          // console.dir( slogansArray[0].parentElement ); 
      },
      switchSlogan( $slogansArray ){
        const _this = this;
        //settings
        let transitionTime = 0.4;
        let slogansDelayTime = 2;
        
        //internal
        let totalSlogans = $slogansArray.length;
        
        let oldSlogan = 0;
        let currentSlogan = -1;

        oldSlogan = currentSlogan;
				
				if(currentSlogan < totalSlogans-1){
					currentSlogan ++
				} else {
					currentSlogan = 0;
				}
				
        console.log( "11111111", $slogansArray );

        
				TweenLite.to($slogansArray.eq(oldSlogan), transitionTime, {top:-20, alpha:0, rotationX: 90});
				TweenLite.fromTo($slogansArray.eq(currentSlogan), transitionTime, {top:20, alpha:0, rotationX: -90 }, {top:0, alpha:1, rotationX:0});
				
				TweenLite.delayedCall(slogansDelayTime, _this.switchSlogan());



      }


      // start() {
      //   const timer = setInterval(() => {
      //       this.num = this.counter;
      //       this.counter++;
      //       this.num++;
      //       this.$refs.line.style.width = this.num + "%";

      //       if( this.counter == 100 ){
      //           console.log( "여기?" );
      //           clearInterval( timer );
      //       }
      //   }, 50);

      //   this.loading = true;
      // },
      // finish() {
      //   this.counter = 0;
      //   this.num = 0;
      //   this.loading = false;
      // },
    },
    mounted(){
      this.$nextTick(() => {
         if( process.client ){
           this.loadingShow();
         }
      })
     
    }
  }
</script>

<style lang="scss">
  .loading-page{ 
    position: fixed; top:0; left:0; width: 100vw; height: 100vw; background:#fff; z-index: 100;
    #holder{
        position: relative;
        width: 100%;
        margin: 100px auto;
        -webkit-user-select: none;  
        -moz-user-select: none;    
        -ms-user-select: none;     
        -o-user-select: none;
        user-select: none;
      }
      
      #slogans{
        position: relative;
        top: 0px;
        right: 0px;
      }
      
      p.slogan{
        text-rendering: optimizeLegibility;
        margin: 0px;
        font-size: 60px;
        text-transform: uppercase;
      }
      
      p.slogan strong{
        display:block;
        position:relative;
        opacity:0;
      }  
      
    } 
</style>