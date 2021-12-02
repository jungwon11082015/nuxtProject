<template>
 <main>
    <div id="contents">
      <section id="section0">
        <div class="section0_text-box">
          <ul class="text-list">
            <li>DIGITAL</li>
            <li>DESIGN</li>
            <li>STUDIO</li>
          </ul>
        </div>
        <div class="section0_title-box">
          <p>
            UI/UX를 전문으로 하고 있는<br />
            디지털 디자인 스튜디오 인더엑스입니다.<br />
            Specializing in UI/UX<br />
            Digital design studio <em>HeoPro-v</em>
          </p>
        </div>
        <div class="section0_bubble-box">
          <div class="bubble-inner">
            <div class="bubble" v-for="item in 100" :key="item"></div>
          </div>
        </div>
        <div class="section0_arrow-box">
          <div class="section0_arrrow-area">
              <div class="arrow arrow-first"></div>
              <div class="arrow arrow-second"></div>
          </div>
        </div>
      </section>
      <section id="section1">
        <div class="text-container text-container__back">
          <h2 class="parallax-text">
            Follow me for more tutorials
          </h2>
          <h2 class="parallax-text">
            Double tap to like this post
          </h2>
        </div>
        <div class="image-container parallax" data-depth='-2'>
          <div class="image-container__inner parallax" data-depth='1'>
            <img src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&auto=format&fit=crop&w=2168&q=80" alt="Avocado">
          </div>
        </div>
        <div class="text-container text-container__front">
          <h2 class="parallax-text">
            Follow me for more tutorials
          </h2>
          <h2 class="parallax-text">
            Double tap to like this post
          </h2>
        </div>
      </section>
    </div>
  </main>
</template>

<script>

import gsap from "gsap";
  export default {
    data: function(){
        return {
          window: {
              width: 0,
              height: 0
          },
          textContainers:null,

        }
    },

    beforeCreate(){

    },

    created(){
      console.log( "created" );
    },
    mounted(){

      window.addEventListener('resize', this.handleResize);
      this.$nextTick( function(){
        this.section1TextMotion();  
      });
    },
     
    methods:{
      handleResize() {
          this.window.width = window.innerWidth;
          this.window.height = window.innerHeight;
      },
      section1TextMotion: function(){
        const gsap = this.$gsap;
        const ScrollTrigger = this.$ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger)
        let textContainers = document.querySelectorAll( ".text-container" );

        textContainers.forEach(($ele, $index) =>{
          let top = $ele.getBoundingClientRect().top;
          let start = this.window.height - top;
          let firstText =  $ele.querySelector( ".parallax-text:first-child" );
          let secondText =  $ele.querySelector( ".parallax-text:last-child" );

          gsap.to(firstText, {
            scrollTrigger: {
              trigger: $ele,
              scrub: true,
              start: start + "px bottom",
              end: "bottom top"
            },
            x: '-54vw',
            transformOrigin: "left center", 
            ease: "none"
          });

          gsap.to(secondText, {
            scrollTrigger: {
              trigger: $ele,
              scrub: true,
              start: start + "px bottom",
              end: "bottom top"
            },
            x: '32vw',
            transformOrigin: "left center", 
            ease: "none"
          });
        })
      }
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },

 
  }
</script>


<style lang="scss">
  @import "~assets/scss/reset";
  @import "~assets/scss/function";
  //사용법
      //@include toRem(width, 400);
  //
  #section0{
    height: 100vh;
    background-color: #000;
    background-size: cover;
    position: relative;
    width: 100%;
    overflow: hidden;
    .section0_text-box{
      position: absolute; z-index: 10;
      @include toRem(top, 500);
      @include toRem(left, 100);
      transform: translate(0, -50%);
      width: auto;
      .text-list{
        li{
          @include toRem(font-size, 180);
          @include toRem( letter-spacing, 5);
          font-family: 'Anton', sans-serif;
          font-weight: 400;
          color: #fff;
        }
        :nth-child(1){
          color: #000000;
          text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0#fff, 0 -1px #fff;
          text-transform: uppercase;
        }
        :nth-child(2){
          @include toRem( padding-left, 200);
        }
      }
    }

    .section0_title-box{
      position: absolute;
      @include toRem(top, 500);
      @include toRem(right, 300);
      p{
          color: #fff;
          @include toRem( font-size, 24 );
          text-transform: uppercase;
          font-weight: 500;
          @include toRem( line-height, 30 );
          font-family: 'Noto Sans KR';
      }
    }
    .section0_bubble-box{
        position: relative;
        width: 100%;
        min-height: 100%;
        transform-style: preserve-3d;
      .bubble-inner{
        margin: 400px auto 0;
        width: 500px;
        height: 500px;
        transform-style: preserve-3d;
        transform-origin: center center;
        perspective: 600px;
        .bubble{
          position: absolute;
          background: black;
          opacity: .7;
          border-radius: 50%;
          animation: move 3s infinite;
        }

        @for $i from 1 through 100 {
          .bubble:nth-child(#{$i}){
            $size: random(30)+px;
            height: $size;
            width: $size;
            animation-delay: -$i * .2s;
            transform: translate3d( (random(1000) * 1px),  (random(1000) * 1px), (random(2000) * 1px));
            background: hsl( random(360) , 100%, 50%);
          }
        }

        @keyframes move { 
          100% {
            transform: translate3d(0, 0, -500px);
          }
        }
      }
    }
    .section0_arrow-box{
      position: absolute;
      @include toRem(top, 800);
      @include toRem(left, 200);
      .section0_arrrow-area{
        position: relative;
          @include toRem(width, 30);
          @include toRem(height, 140);
          $ani-speed: 2s;
          $ani-delay: 1s;
          .arrow {
              opacity: 0;
              position: absolute;
              left: 50%;
              top: 50%;
              transform-origin: 50% 50%;
              transform: translate3d(-50%, -50%, 0);
                &.arrow-first {
                    animation: arrow-movement $ani-speed ease-in-out infinite;
                }
                &.arrow-second {
                    animation: arrow-movement $ani-speed $ani-delay ease-in-out infinite;
                }
                &:before{
                  transform: rotate(45deg) translateX(-23%);
                  transform-origin: top left;
                }
                &:after{
                  transform: rotate(-45deg) translateX(23%);
                  transform-origin: top right;
                }
          }
          .arrow:before,
          .arrow:after {
              background: #C3F932;
              content: '';
              display: block;
              height: 3px; 
              position: absolute;
              top: 0;
              left: 0;
              width: 30px;
          }
          // Animation
          @keyframes arrow-movement {
              0% { 
                  opacity: 0;
                  top: 40%;
              }
              70% {
                  opacity: 1;
              }
              100% { 
                  opacity: 0;
              }
          }
      }
     

    }

  }

  #section1{
    position: relative;
    padding:10vw 0;
    overflow: hidden;
    background-color: #000;
    .image-container{
      position: relative;
      z-index: 2;
      width: 42vw;
      height: 58vw;
      margin: 0 auto;
      overflow: hidden;
      .image-container__inner{
        width: 100%;
        height: 100%;
        img{ 
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scale(1.2);
        }
      }
    }
    .text-container{
      position: absolute;
      z-index: 1;
      top: 60%;
      left: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      transform: translateY(-50%);
    }
    .text-container__front{
      z-index: 3;
      .parallax-text{
        color: transparent;
        -webkit-text-stroke: 0.2vw #f7f7f7;
      }
    }
    .parallax-text{
      position: relative;
      font-family: 'Montserrat', sans-serif;
      font-size: 12vw;
      line-height: 10vw;
      text-transform: uppercase;
      white-space: nowrap;
      color: #f7f7f7;
      margin: 0;
      
      &:last-child{
        align-self: flex-end;
      }
    }

  }

</style>