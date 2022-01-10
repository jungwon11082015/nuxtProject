<template>
 <main>
    <div id="contents">
      <section id="section0">
        <div class="section0_inner" ref="section0Attr">
          <div class="section0_center">
            <div class="section0_cricle">
              <div class="section0_video_content">
                <video autoplay controls loop  muted="true">
                    <source src="/video/index.mp4" type="video/mp4">
                </video>
              </div>
            </div>
            <div class="section0_text">
              <h2>
                <span><em class="section0_title">누구나</em></span>
                <span><em class="section0_title">마음 편히</em></span>
                <span><em class="section0_title">놀 수 있게</em></span>
              </h2>
            </div>
            <div class="btn-scroll-holder onHide white">
              <div class="ico animated">
              
                <div class="circle circle-top"></div>  
                <div class="circle circle-main"></div>
                <div class="circle circle-bottom"></div>  
                
                <svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve" >
                  <defs>
                    <clipPath id="cut-off-arrow">
                      <circle cx="306" cy="306" r="287"/>
                    </clipPath>
                    
                    <filter id="goo">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                      <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                  
                  </defs>
                  <path  class="st-arrow" d="M317.5,487.6c0.3-0.3,0.4-0.7,0.7-1.1l112.6-112.6c6.3-6.3,6.3-16.5,0-22.7c-6.3-6.3-16.5-6.3-22.7,0
                        l-86,86V136.1c0-8.9-7.3-16.2-16.2-16.2c-8.9,0-16.2,7.3-16.2,16.2v301.1l-86-86c-6.3-6.3-16.5-6.3-22.7,0
                        c-6.3,6.3-6.3,16.5,0,22.7l112.7,112.7c0.3,0.3,0.4,0.7,0.7,1c0.5,0.5,1.2,0.5,1.7,0.9c1.7,1.4,3.6,2.3,5.6,2.9
                        c0.8,0.2,1.5,0.4,2.3,0.4C308.8,492.6,313.8,491.3,317.5,487.6z"/>
                </svg>
            </div>
            </div>

          </div>
        </div>
        <!-- <div class="section0_text-box">
          <ul class="text-list">
            <li>CREATE</li>
            <li>DEVELOPER</li>
            <li>DREAM</li>
          </ul>
        </div>
        <div class="section0_title-box">
          <p>
            "할 수 있다고 생각하면 성취된다.<br />
            하지만 안 된다고 생각하면 되지 않는다.<br /> 
            이것은 불변의 법칙이다."<br />
            <em>Pablo Ruiz Picasso</em>
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
        <div class="section0_side-box">
          <p>2021 PROJECT SITE</p>
        </div> -->
      </section>

      <section id="section1" class="white">
        <div class="text-container text-container__back">
          <h2 class="parallax-text">
            The frog in the well knows
          </h2>
          <h2 class="parallax-text">
            nothing of the great ocean.
          </h2>
        </div>
        <div class="image-container parallax" data-depth='-2'>
          <div class="image-container__inner parallax" data-depth='1'>
            <img src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&auto=format&fit=crop&w=2168&q=80" alt="Avocado">
          </div>
        </div>
        <div class="text-container text-container__front">
          <h2 class="parallax-text">
          The frog in the well knows
          </h2>
          <h2 class="parallax-text">
          nothing of the great ocean.
          </h2>
        </div>
      </section>

      <section id="section2">
         <div class="section2_text-box">
          <ul class="text-list">
            <li>WHAT</li>
            <li>WE OFFER</li>
          </ul>
        </div>
        <div class="section2_title-box">
          <p>
            PRODUCT ENVIRONMENT,<br />
            USER EXPERIENCE,<br />
            BASED ON THE DESIGNER'S SENSIBILITY<br />
            EXPRESSING VALUABLE DESIGN.
          </p>
        </div>
        <div class="section2_side-box">
          <p>DESIGN STUDIO</p>
        </div>
      </section>

      <section id="section3">
        <article class="reveal">
          <div class="row">
            <div class="text">
              <h1 class="title"><div class="show">CASAMIA</div></h1>
              <div class="sub"><span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac facilisis urna, sed elementum ante. Aenean ornare vestibulum augue, id semper augue congue sed. </span>
                <br>
                  <span class="readmore">Read more</span> 
              </div>
            </div>
            <div class="img-wrapper">
            <img class="project-img" src="images/project_img_01.jpg" alt="casamia">
              </div>
          </div> 
        </article>
        <article class="reveal">
          <div class="row">
            <div class="text">
              <h1 class="title"><div class="show">Bullsone</div></h1>
              <div class="sub"><span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac facilisis urna, sed elementum ante. Aenean ornare vestibulum augue, id semper augue congue sed. </span>
                  <br>
                  <span class="readmore">Read more</span>
              </div>
            </div>
            <div class="img-wrapper"> 
              <img class="project-img" src="images/project_img_02.jpg" alt="bullsone">
            </div>
          </div> 
        </article>
        <article class="reveal">
          <div class="row">
            <div class="text">
              <h1 class="title"><div class="show">Travel to: Germany</div></h1>
              <div class="sub"><span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac facilisis urna, sed elementum ante. Aenean ornare vestibulum augue, id semper augue congue sed. </span>
                  <br>
                  <span class="readmore">Read more</span>
              </div>
            </div>
            <div class="img-wrapper">
            <img class="project-img" src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="">
              </div>
          </div> 
        </article>

      </section>

      <section id="section4" class="white">
        <div class="section4_text-box">
          <ul class="text-list">
            <li>OUR</li>
            <li>CLIENTS</li>
          </ul>
        </div>
        <div class="section4_partner-box">
            <ul class="section4_parther-list">
                <li>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                </li>
                <li>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                </li>
                <li>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                </li>
             
            </ul>
        </div>
      </section>

    </div>
  </main>
</template>


<script>
import Mixin from '../plugins/MyMixin.js'
import {gsap, Power0, power2, power3, power4, timeline,Expo, elastic  } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.min.js" 
gsap.registerPlugin(ScrollTrigger);
  export default {
    mixins: [Mixin],
    data(){
        return {
          window: {
              width: 0,
              height: 0
          },
          loadingChecked: null,
          section0Vedio:null
        }
    },
    beforeDestroy () {
      ScrollTrigger.getById("indexPannels").disable();
    },

    computed: {
  
    },
    beforeCreate(){
    },

    created(){

      // ScrollTrigger.getAll();
    },
    mounted(){

      this.$nextTick( function(){

      this.$nuxt.$on('eventBusLoadingCheck', (isLoadingCheck) => {
         this.loadingChecked = isLoadingCheck;
         console.log( this.loadingChecked ); 
         if( this.loadingChecked ){
             this.section0Motion();
         }
      })


        this.section3Motion();
        this.headerScroll();
      });
    },
     
    methods:{
      section0Motion: function(){
        window.scrollTo(0,0);
        let section0Attribute  = this.$refs.section0Attr;
        let section0Style = {
          position: "relative",
          width : window.innerWidth + "px",
          height : window.innerHeight + "px"
        };
        Object.assign(section0Attribute.style, section0Style);
        let section0TextList = document.querySelectorAll( ".section0_title");
        let listArr = Array.prototype.slice.call( section0TextList );


        let target = document.querySelector( ".section0_cricle" );
        let tl = gsap.timeline();
        let _that = this;
        tl.to( target, 0.15, { width:"5%", height:"10%",  ease: Power0.easeOut });
        tl.to( target, 0.15, { width: "20%", height:"40%",  ease: Power0.easeOut });
        tl.to( target, 0.35, { borderRadius:"0", width: "100%", height:"100%", ease: Power0.easeIn, onComplete: function(){
         listArr.forEach( ( ele, index )=>{
           gsap.set( ele,{ top: ele.clientHeight, opacity:0  });
           gsap.to( ele, 0.35, { top: 0, opacity:1, ease:Power0.easeInOut, delay: index * 0.2 });
            _that.section1TextMotion();  
         });
        }});
      },

      section1TextMotion: function(){
        let textContainers = document.querySelectorAll( ".text-container" );

        textContainers.forEach(($ele, $index) =>{
          let top = $ele.getBoundingClientRect().top;
          let eleTarget = document.getElementById( "section1" );
          let start = eleTarget.clientHeight;
          let bottom = eleTarget.offsetBottom;
          // let start = this.window.height - top;
          let firstText =  $ele.querySelector( ".parallax-text:first-child" );
          let secondText =  $ele.querySelector( ".parallax-text:last-child" );

          gsap.to(firstText, {
            scrollTrigger: {
              trigger: $ele,
              // markers:true,
              scrub: true,
              start: -(start/1.75) + "px top",
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
             start:"top center",
              end: "bottom top"
            },
            x: '32vw',
            transformOrigin: "left center", 
            ease: "none"
          });
        });

      },
      section3Motion: function(){
      
        gsap.utils.toArray(".reveal").forEach(function (section) {
          let title = section.querySelector(".show");
          let imgWrapper = section.querySelector(".img-wrapper");
          let img = section.querySelector(".project-img");
          let subText = section.querySelector(".sub");

          gsap.to(title, 1, {
            ease: "power3.out",
            y: 0,
            scrollTrigger: {
              trigger: section,
              start: "-30%",
              end: "bottom bottom"
            }
          });
          
          gsap.to(imgWrapper, 1, {
            ease: "power3.out",
            width: "70%",
            scrollTrigger: {
              trigger: section,
              start: "-50px",
              end: "bottom bottom"
            }
          });

          gsap.to(img, 1.05, {
            ease: "power3.out",
            width: "100%",
            scrollTrigger: {
              trigger: section,
              start: "-50px",
              end: "bottom bottom"
            }
          });

          gsap.to(subText, 1.1, {
            ease: "power3.out",
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: section,
              start: "-30%",
              end: "bottom bottom"
            }
          });
        });
      },

      headerScroll(){
    
        let sectionTarget = document.querySelectorAll( ".white" );
        let header = document.getElementsByTagName( "header" )[0];
         sectionTarget.forEach((section, index) => {
          gsap.to(section, 0.35, {
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: 'top top+=50px',
              toggleActions: 'play none none reverse',
              // markers: true
            }
          });
          
          ScrollTrigger.create({
            trigger: section,
            id: "indexPannels",
            start: 'top top+=50px',
            end: () => `+=${section.clientHeight}`,
            toggleActions: 'play reverse none reverse',
            toggleClass: {targets: header, className: "is-active"},
            // markers: true
          })
        })

      },
      beforeDestroy() {
      },
      destroyed() {
        this.loadingChecked = false;
        this.section0Vedio = null
      },
    },
  
  }

</script>


<style lang="scss" scoped >
  @import "~assets/scss/reset";
  @import "~assets/scss/function";
  //사용법
      //@include toRem(width, 400);
  //
  
  #section0{
    width: 100%;
    overflow: hidden;
    // background: #fff;

    .section0_inner{
      position: fixed;
      top:0; left:0; 
      width: 100%;
      height: 100%;
      display: table;
      z-index: 1;
      .section0_center{
        display: table-cell; vertical-align: middle;
        .section0_cricle{
             position: relative;
            border-radius:50%;
            width:0;
            height:0;
            border:none;
            margin: 0 auto;
            overflow: hidden;
            .section0_video_content{
              position: absolute; top:0; left:0; width: 100%; height: 100%;
              video{
                position: absolute;
                transform: translate3d(-50%,-50%,0);
                top: 50%;
                left: 50%;
                min-width: 100%;
                min-height: 100%;
                width: auto;
                height: auto;
                overflow: hidden;
                -o-object-fit: fill;
                object-fit: fill;
                z-index: 10;
              }
            }
        }
        .section0_text{
          position: absolute;
          top:0; right:0;
          @include toRem(top, 400); 
          @include toRem(right, 180); 
          @include toRem(width, 500); 
          @include toRem(height, 300); 
          z-index: 11;
          h2{
            span{ 
              display: block; position: relative;  overflow: hidden;
              @include toRem(height, 80); 
              @include toRem(margin-top, 10); 
              @include toRem(font-size, 70); color: #fff;
              font-family: 'Noto Sans KR';
              font-weight: 500;
              &:first-child{ margin-top:0; }
              em{ position: absolute; top:0; left:0; opacity: 0; font-weight: bold; }
            }
          }
        }

        .btn-scroll-holder{
          position: fixed;
          bottom: 0;
          right: 0;
          margin-right: 5.84112vw;
          margin-bottom: 7.00935vw;
          opacity: 1;
          transform: translateZ(0);
          transition: transform .25s ease-in-out 1.5s,opacity .25s ease-out 1.5s;
          z-index: 2500;
       
        }
      }
    } 
  
    // .section0_text-box{
    //   position: absolute; z-index: 10;
    //   @include toRem(top, 500);
    //   @include toRem(left, 100);
    //   transform: translate(0, -50%);
    //   width: auto;
    //   .text-list{
    //     li{
    //       @include toRem(font-size, 180);
    //       @include toRem( letter-spacing, 5);
    //       font-family: 'Anton', sans-serif;
    //       font-weight: 400;
    //       color: #fff;
    //     }
    //     :nth-child(1){
    //       color: #000000;
    //       text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0#fff, 0 -1px #fff;
    //       text-transform: uppercase;
    //     }
    //     :nth-child(2){
    //       @include toRem( padding-left, 200);
    //     }
    //   }
    // }

    // .section0_title-box{
    //   position: absolute;
    //   @include toRem(top, 500);
    //   @include toRem(right, 300);
    //   p{
    //       color: #fff;
    //       @include toRem( font-size, 24 );
    //       text-transform: uppercase;
    //       font-weight: 500;
    //       @include toRem( line-height, 30 );
    //       font-family: 'Noto Sans KR';
    //   }
    // }

    // .section0_bubble-box{
    //     position: relative;
    //     width: 100%;
    //     min-height: 100%;
    //     transform-style: preserve-3d;
    //   .bubble-inner{
    //     margin: 400px auto 0;
    //     width: 500px;
    //     height: 500px;
    //     transform-style: preserve-3d;
    //     transform-origin: center center;
    //     perspective: 600px;
    //     .bubble{
    //       position: absolute;
    //       background: black;
    //       opacity: .7;
    //       border-radius: 50%;
    //       animation: move 3s infinite;
    //     }

    //     @for $i from 1 through 100 {
    //       .bubble:nth-child(#{$i}){
    //         $size: random(30)+px;
    //         height: $size;
    //         width: $size;
    //         animation-delay: -$i * .2s;
    //         transform: translate3d( (random(1000) * 1px),  (random(1000) * 1px), (random(2000) * 1px));
    //         background: hsl( random(360) , 100%, 50%);
    //       }
    //     }

    //     @keyframes move { 
    //       100% {
    //         transform: translate3d(0, 0, -500px);
    //       }
    //     }
    //   }
    // }

    // .section0_arrow-box{
    //   position: absolute;
    //   @include toRem(top, 800);
    //   @include toRem(left, 200);
    //   .section0_arrrow-area{
    //     position: relative;
    //       @include toRem(width, 30);
    //       @include toRem(height, 80);
    //       $ani-speed: 2s;
    //       $ani-delay: 1s;
    //       .arrow {
    //           opacity: 0;
    //           position: absolute;
    //           left: 50%;
    //           top: 50%;
    //           transform-origin: 50% 50%;
    //           transform: translate3d(-50%, -50%, 0);
    //             &.arrow-first {
    //                 animation: arrow-movement $ani-speed ease-in-out infinite;
    //             }
    //             &.arrow-second {
    //                 animation: arrow-movement $ani-speed $ani-delay ease-in-out infinite;
    //             }
    //             &:before{
    //               transform: rotate(45deg) translateX(-23%);
    //               transform-origin: top left;
    //             }
    //             &:after{
    //               transform: rotate(-45deg) translateX(23%);
    //               transform-origin: top right;
    //             }
    //       }
    //       .arrow:before,
    //       .arrow:after {
    //           background: #C3F932;
    //           content: '';
    //           display: block;
    //           height: 3px; 
    //           position: absolute;
    //           top: 0;
    //           left: 0;
    //           width: 30px;
    //       }
    //       // Animation
    //       @keyframes arrow-movement {
    //           0% { 
    //               opacity: 0;
    //               top: 40%;
    //           }
    //           70% {
    //               opacity: 1;
    //           }
    //           100% { 
    //               opacity: 0;
    //           }
    //       }
    //   }
     

    // }
    // .section0_side-box{
    //   position: absolute;
    //   @include toRem(top, 500);
    //   @include toRem(right, -100);
    //   p{
    //     @include toRem(font-size, 20);
    //     color: #757575;
    //     @include toRem(letter-spacing, 5);
    //     transform: rotate(-90deg);
    //   }
    // }
  }

  #section1{
    position: relative;
    margin:10vw 0;
    overflow: hidden;
    background-color: #fff;
    .image-container{
      position: relative;
      z-index: 2;
      width: 42vw;
      height: 58vw;
      margin: 0 auto;
      overflow: hidden;
      .image-container__inner{
        position: absolute;
        height: 100%;
        width: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        img{ 
          height: 100vh;
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
        -webkit-text-stroke: 0.2vw #000;
      }
    }
    .parallax-text{
      position: relative;
      font-family: 'Montserrat', sans-serif;
      font-size: 12vw;
      line-height: 10vw;
      text-transform: uppercase;
      white-space: nowrap;
      color: #000;
      margin: 0;
      
      &:last-child{
        align-self: flex-end;
      }
    }

  }

  #section2{
    height: 100vh;
    background-color: #000;
    background-size: cover;
    position: relative;
    width: 100%;
    overflow: hidden;
    .section2_text-box{
      position: absolute; z-index: 10;
      @include toRem(top, 450);
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

        }
        :nth-child(2){
          color: #fff;
          text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0#fff, 0 -1px #fff;
          text-transform: uppercase;
          @include toRem( padding-left, 200);
        }
      }
    }

    .section2_title-box{
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

    .section2_side-box{
      position: absolute;
      @include toRem(top, 500);
      @include toRem(right, -50);
      p{
        @include toRem(font-size, 20);
        color: #000;
        @include toRem(letter-spacing, 5);
        transform: rotate(-90deg);
      }
    }

  }

  #section3{
    overflow: hidden;
    article {
      height: 100vh;
      width: 100vw;
      background-color: #1a1a1a;
      &.reveal {
        padding: 70px 0;
        display: flex;
        justify-content: flex-end;
          .row {
            width: 90%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            position: relative;
             .text {
                width: 40%;
                position: absolute;
                left: 0;
              }
              h1,
              .sub {
                color: white;
              }
              h1 {
                font-size: 48px;
                font-family: "Playfair Display";
                position: relative;
                overflow: hidden;
                &.show {
                    transform: translate(0, 100px);
                }
                .sub {
                  font-family: "Roboto";
                  font-size: 21px;
                  transform: translate(0, 100%);
                  opacity: 0;
                  span {
                    background-color: #1a1a1a;
                    &.readmore{
                      margin-top:50px;
                      position: relative;
                      display:inline-block;
                      &:hover{
                        &:after{  width:100%; height: 100%;}
                      }
                      &:after{
                        content:"";
                        width:0%;
                        height: 100%;
                        position: absolute;
                        border-bottom:1px solid white;
                        left:0;
                        bottom:0;
                        transition:1s;
                      }
                    }
                  }
                }
              }
              .img-wrapper {
                width: 0%;
                height: 100%;
                object-fit: cover;
                background-color: #0b0b0b;
                display: flex;
                justify-content: flex-end;
                img{
                  width: 0%;
                  height: 100%;
                  object-fit: cover;
                  right: 0;
                }
              }
          }
      }
    }
  }

  #section4{
      height: 100vh;
      background-color: #fff;
      background-size: cover;
      position: relative;
      width: 100%;
      overflow: hidden;
    .section4_text-box{
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
            color: #000;
          }
          :nth-child(1){
            color: #000000;
            text-shadow: -1px 0 #000, 0 1px #000, 1px 0#000, 0 -1px #000;
            text-transform: uppercase;
          }
          :nth-child(2){
            @include toRem( padding-left, 200);
          }
        }
        .section4_partner-box{
          width: 50%;
          position: absolute;
          top: 0;
          right: 0;
        }
    }
    .section4_parther-list{
      @include toRem(width, 780);
      @include toRem(height, 410);
      @include toRem(margin-top, 300);
      @include toRem(margin-left, 940);
      overflow: hidden;
      @keyframes slideDown {
        from { top: 0 }
        to { top: -980px }
      }

      @keyframes slideUp {
        from { top: -980px }
        to { top: 0 }
      }
      li{
        float: left;
        @include toRem(width, 250);
        position: relative;
        animation-name: slideDown;
        animation-duration: 16s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
          img{
            display: inline-block;
            width: 250px;
            height: 100px;
            margin:5px; 
          }
        &:nth-child(2){
            animation-name: slideUp;
            animation-duration: 16s;
        }
        &:after{ content: ''; display: block; clear: both; }
      }
    }
  }
</style>