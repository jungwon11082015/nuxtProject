<template>
    <div id="sections">
        <section id="section0">
            <div class="about-title">
                <div class="about-title-box">
                    <h1>We are a Digital</h1>
                    <h2>
                        <span class="box"></span>
                        <span class="hi">Hi, I'm</span>
                        <span class="text"></span>
                        <span class="cursor">_</span>
                    </h2>
                </div>
            </div>
        </section>

        <section id="section1">
            <div class="inner">
                <article>
                    <h2>About me</h2>
                    <h3>
                        인더엑스는 다양한 경험속에서<br />
                        완벽한 해답을 찾습니다.
                    </h3>
                    <div class="text-box">
                        <span class="line"></span>
                        <p>
                            고객의 니즈와 트렌드를 반영하여 합리적인 가격으로 고퀄리티의 디자인을 제공하기 위해 눈에 보이지
                            않는 작은 부분까지 디테일하게 작업합니다. 우리의 혁신은 사용자들의 숨은 니즈를 찾는 것에서부터 시작
                            합니다. 인더엑스만의 정교한 리서치 설계와 프로세스 방법론을 통해 혁신적인 전략을 도출하고 내부
                            전문가 집단의 경험과 수행력을 더해 국내 최고의 UX/UI 디자인 서비스를 제공합니다.
                        </p>
                    </div>
                    <div class="figure-box">
                        <figure>
                            <img src="/images/about_img_01.png" alt="">
                        </figure>
                        <em>CREATE</em>
                    </div>
                    <div class="figure-box right">
                        <figure>
                            <img src="/images/about_img_02.png" alt="">
                        </figure>
                        <em>SENSIBILTY</em>
                    </div>
                  
                </article>
            </div>
           
        </section>

        <section id="section2">
            <div class="inner">
                <article>
                    <h2>About me</h2>
                    <h3>
                        인더엑스는 다양한 경험속에서<br />
                        완벽한 해답을 찾습니다.
                    </h3>
                    <div class="text-box">
                        <span class="line"></span>
                        <p>
                            고객의 니즈와 트렌드를 반영하여 합리적인 가격으로 고퀄리티의 디자인을 제공하기 위해 눈에 보이지
                            않는 작은 부분까지 디테일하게 작업합니다. 우리의 혁신은 사용자들의 숨은 니즈를 찾는 것에서부터 시작
                            합니다. 인더엑스만의 정교한 리서치 설계와 프로세스 방법론을 통해 혁신적인 전략을 도출하고 내부
                            전문가 집단의 경험과 수행력을 더해 국내 최고의 UX/UI 디자인 서비스를 제공합니다.
                        </p>
                    </div>
                    <div class="figure-box">
                        <figure>
                            <img src="/images/about_img_01.png" alt="">
                        </figure>
                        <em>CREATE</em>
                    </div>
                    <div class="figure-box right">
                        <figure>
                            <img src="/images/about_img_02.png" alt="">
                        </figure>
                        <em>SENSIBILTY</em>
                    </div>
                  
                </article>
            </div>
           
        </section>

    
       
    </div>
</template> 

<script>
    import Mixin from '../plugins/MyMixin.js'
    import {gsap, power2, power3, power4, elastic  } from "gsap";
    import { TextPlugin } from "gsap/dist/TextPlugin.js";
    gsap.registerPlugin(TextPlugin);
    export default {
        data(){
            return {
                window: {
                    width: 0,
                    height: 0
                },
            }
        },
        beforeDestroy () {
            console.log( "beforeDestroy" );
        },

        computed: {
    
        },
        beforeCreate(){
            console.log( "beforeCreate" );
        },

        created(){
            console.log( "created" );
        },
        mounted(){

        this.$nextTick( function(){
            console.log( "nextTick" ); 
            this.aboutKvShow();
        });
        },
        
        methods:{
            aboutKvShow(){
                const words = ["Frabatx.", "a Developer"];
                let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: -1});
                let boxTl = gsap.timeline();

                    boxTl.to('.box',{duration:1, width: "17vw", delay: 0.5, ease: "power4.inOut"})
                    .from('.hi', {duration: 1, y: "7vw", ease: "power3.out", onComplete: ()=> masterTl.play() })
                    .to('.box', {duration: 1, height: "7vw", ease: "elastic.out(1, 0.3)"});
                let masterTl = gsap.timeline({repeat: -1}).pause();
                words.forEach(word => {
                    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:1});
                    tl.to('.text', {duration: 1, text: word});
                    masterTl.add(tl);
                })

            }
        },
    }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/reset"; 
  @import "~assets/scss/function";
  //사용법
      //@include toRem(width, 400);
  //
  #sections{
    @include toRem(padding-top, 240);
    @include toRem(padding-bottom, 130);
    background: #000;
    #section0{
            height: 100vh;
            background-size: cover;
            position: relative;
            width: 100%;
            overflow: hidden;
            background: #000;
            .about-title{
                position: absolute;
                @include toRem(top, 10);
                left: 0;
                width: 100%;
                text-align: center;
                .about-title-box{
                    h1,
                    h2{
                        @include toRem(font-size, 180);
                        font-weight: bold;
                        letter-spacing: 3px;
                        margin-top: 2.5vw;
                        @include toRem(line-height, 180);
                        color: #fff;
                        font-family: 'Anton', sans-serif;
                    }
                    h1{
                        color: #000000;
                        text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0#fff, 0 -1px #fff;
                        text-transform: uppercase;
                    }
                    h2{
                        position: relative;
                        font-size: 5.4vw;
                        font-weight: bold;
                        overflow: hidden;
                        .box{
                            position: absolute;
                            bottom: 0;
                            display: inline-block;
                            background: blue;
                            height: 1vw;
                            z-index: -1; 
                        }
                        .hi{ display: inline-block;}
                    }
                }
            }
    }

    #section1{
        position: relative; 
        width: 100%;
        background: #fff;
        .inner{
            padding:initRem( 100, 150, 0, 150  );
            article{
                @include toRem(padding-bottom, 160);
                overflow: hidden;
                h2{
                    @include toRem(font-size, 20);
                    font-weight: 100;
                    font-family: 'Anton', sans-serif;
                }
                h3{
                    float: left;
                    padding:initRem( 26, 0, 0, 0  );
                    @include toRem(font-size, 46);
                    @include toRem(line-height, 72);
                    font-weight: bold;
                    font-family: 'Noto Sans KR';
                }
                .text-box{ 
                    float: left;
                    padding:initRem( 140, 0, 0, 150  );
                    @include toRem( width, 800 );     
                    span{ 
                        display: inline-block;
                        @include toRem( width, 100 );
                        @include toRem( height, 1 );
                        background: #000;
                    }
                    p{
                        @include toRem(padding-top, 60);
                        @include toRem(font-size, 18);
                        @include toRem(line-height, 36);
                        font-family: 'Noto Sans KR';
                        
                    }
                }
                .figure-box{
                    position: relative;
                    display: block;
                    @include toRem(margin-top, 46);
                    em{
                        position: absolute;
                        z-index: 5;
                        @include toRem(top, 570);
                        @include toRem(left, 560);
                        display: block;
                        @include toRem(font-size, 220);
                        @include toRem(letter-spacing, 10);
                        font-weight: 900;
                        text-shadow: -2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000;
                        color: #fff;
                        font-family: 'Anton', sans-serif;
                    }
                    &:after{
                        content: '';
                        display: block;
                        position: absolute;
                        z-index: 5;
                        @include toRem(width, 1);
                        @include toRem(height, 260);
                        @include toRem(top, 850);
                        @include toRem(right, 100);
                        background: #000;
                    }
                    &.right{
                        @include toRem(margin-top, 100 );
                        figure{ 
                            @include toRem(padding-left, 710 );
                        }
                        em{
                            @include toRem(top, 260);
                            @include toRem(left, 0);
                        }
                        &:after{
                            content: '';
                            display: block;
                            position: absolute;
                            z-index: 5;
                            @include toRem(width, 300);
                            @include toRem(height, 1);
                            @include toRem(top, 0);
                            @include toRem(left, 0);
                            background: #fff;
                        }
                    }
                }
            }
        }
    }
    #section2{
        position: relative; 
        width: 100%;
        background: #000;
        .inner{
            padding:initRem( 100, 150, 0, 150  );
            article{
                overflow: hidden;
                h2{
                    @include toRem(font-size, 20);
                    font-weight: 100;
                    font-family: 'Anton', sans-serif;
                    color: #fff;
                }
                h3{
                    float: left;
                    padding:initRem( 26, 0, 0, 0  );
                    @include toRem(font-size, 46);
                    @include toRem(line-height, 72);
                    font-weight: bold;
                    font-family: 'Noto Sans KR';
                    color: #fff;
                }
                .text-box{ 
                    float: left;
                    padding:initRem( 140, 0, 0, 150  );
                    @include toRem( width, 800 );     
                    span{ 
                        display: inline-block;
                        @include toRem( width, 100 );
                        @include toRem( height, 1 );
                        background: #fff;
                    }
                    p{
                        @include toRem(padding-top, 60);
                        @include toRem(font-size, 18);
                        @include toRem(line-height, 36);
                        font-family: 'Noto Sans KR';
                        color: #fff;
                        
                    }
                }
                .figure-box{
                    position: relative;
                    display: block;
                    @include toRem(margin-top, 46);
                    em{
                        position: absolute;
                        z-index: 5;
                        @include toRem(top, 570);
                        @include toRem(left, 560);
                        display: block;
                        @include toRem(font-size, 220);
                        @include toRem(letter-spacing, 10);
                        font-weight: 900;
                        text-shadow: -2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000;
                        color: #fff;
                        font-family: 'Anton', sans-serif;
                    }
                    &:after{
                        content: '';
                        display: block;
                        position: absolute;
                        z-index: 5;
                        @include toRem(width, 1);
                        @include toRem(height, 260);
                        @include toRem(top, 850);
                        @include toRem(right, 100);
                        background: #000;
                    }
                    &.right{
                        @include toRem(margin-top, 100 );
                        figure{ 
                            @include toRem(padding-left, 710 );
                        }
                        em{
                            @include toRem(top, 260);
                            @include toRem(left, 0);
                        }
                        &:after{
                            content: '';
                            display: block;
                            position: absolute;
                            z-index: 5;
                            @include toRem(width, 300);
                            @include toRem(height, 1);
                            @include toRem(top, 0);
                            @include toRem(left, 0);
                            background: #000;
                        }
                    }
                }
            }
        }
    }
 }


</style>