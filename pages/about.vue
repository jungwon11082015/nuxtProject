<template>
    <main>
        <div class="about-container">
            <div class="about-title">
                <div class="about-title-box">
                    <h1>We are a Digital</h1>
                    <h2>design Studio</h2>
                </div>
                <div class="gradient_box">
                    <div class="design_box">
                        <p class="design_arrow"></p>
                    </div>
                </div>
            </div>
            <div class="about-text">
                <div class="logo div_wrap">
                    <div class="about-txt wow fadeInUp">
                        <p class="txt">About us</p>
                        <p class="left-txt">
                            인더엑스는 다양한 경험속에서<br>
                            완벽한 해답을 찾습니다.
                        </p>
                        <p class="right-txt">
                            고객의 니즈와 트렌드를 반영하여 합리적인 가격으로 고퀄리티의 디자인을 제공하기 위해 눈에 보이지<br>
                            않는 작은 부분까지 디테일하게 작업합니다. 우리의 혁신은 사용자들의 숨은 니즈를 찾는 것에서부터 시작<br>합니다. 인더엑스만의 정교한 리서치 설계와 프로세스 방법론을 통해 혁신적인 전략을 도출하고 내부<br>
                            전문가 집단의 경험과 수행력을 더해 국내 최고의 UX/UI 디자인 서비스를 제공합니다.
                        </p>
                    </div>
                    <div class="img-box wow fadeInUp">
                        <p>
                            <img src="imgs/studio/about_img_01.png" alt="컨텐츠이미지">
                        </p>
                        <span class="txt">Creative</span>
                        <span class="bar"></span>
                    </div>
                </div>
            </div>
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
            <!-- start of :: service Sec-->
            <article class="service-cont">
                <div class="area">
                    <p class="right-desc">
                        프로덕트의 환경, 사용자의 경험, 디자이너의 감성을 바탕으로<br>
                        그 어떠한 것보다 가치 있는 디자인을 표현합니다.
                    </p>
                    <div class="servi-txt-wrap">
                        <p class="main-txt">
                            디자인의 기획부터 개발까지<br>
                            프로젝트의 A-Z 종합 디자인<br>
                            서비스를 제공합니다.
                        </p>
                        <p class="right-txt">Our Services</p>
                        <ul class=" wow fadeInDown">
                            <li>
                                <p><img src="imgs/studio/about_icon_01.png" alt="아이콘이미지"></p>
                                <p class="desc">Strategy</p>
                            </li>
                            <li>
                                <p><img src="imgs/studio/about_icon_02.png" alt="아이콘이미지"></p>
                                <p class="desc">Branding</p>
                            </li>
                            <li>
                                <p><img src="imgs/studio/about_icon_03.png" alt="아이콘이미지"></p>
                                <p class="desc">UI / UX Design</p>
                            </li>
                            <li>
                                <p><img src="imgs/studio/about_icon_04.png" alt="아이콘이미지"></p>
                                <p class="desc">Develop</p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </article>

            <div class="main-box clients_box height">
                <div class="area">
                    <p class="tit">Our Partners</p>
                    <p><img src="imgs/studio/partners_icon_bg.png" alt="기업로고이미지"></p>
                </div>
            </div>
        </div>
    </main>
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
  main{
    background: #000;
    @include toRem(padding-top, 240);
    @include toRem(padding-bottom, 130);
        .about-container{
            height: 100vh;
            background-size: cover;
            position: relative;
            width: 100%;
            overflow: hidden;
            .about-title{
                position: absolute;
                @include toRem(top, 10);
                left: 0;
                width: 100%;
                text-align: center;
                .about-title-box{
                    h1,
                    h2{
                        @include toRem(font-size, 220);
                        font-weight: bold;
                        letter-spacing: 3px;
                        margin-top: 2.5vw;
                        @include toRem(line-height, 220);
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
  }


</style>