<template>
    <div id="sections">
        <section id="section0">
            <div class="about-title">
                <div class="about-title-box">
                    <h1>We are a Digital</h1>
                    <h2>design Studio</h2>
                </div>
            </div>
        </section>
        <section id="section1">
            <div class="inner">
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
                <div class=""></div>
            </div>
           
        </section>

        <section id="section2">
            <div class="img-cont-box wow fadeInUp">
                <span class="bar"></span>
                <img src="imgs/studio/about_img_02.png" alt="컨텐츠이미지">
                <p class="txt">sensibility</p>
                <span class="bar_02"></span>
            </div>
            <div class="black-bg-cont wow fadeInUp">
                <div class="sec">
                    <span class="bar"></span>
                    <img src="imgs/studio/about_img_03.png" alt="컨텐츠이미지">
                    <p class="txt">Passionate</p>
                </div>
            </div>

        </section>
       
    </div>
</template> 

<script>
    export default {
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
                }
            }
    }

    #section1{
        height: 100vh;
        background-size: cover;
        position: relative; 
        width: 100%;
        overflow: hidden;
        background: #fff;
        .inner{
            padding:initRem( 100, 150, 0, 150  );
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
            &:after{ content: ''; display: block; clear: both; }
        }
    }
  }


</style>