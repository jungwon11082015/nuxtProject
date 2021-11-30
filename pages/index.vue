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
      </section>
    </div>
  </main>
</template>

<script>
export default {}
</script>


<style lang="scss">
  @import "~assets/scss/reset";
  @import "~assets/scss/function";
  //사용법
      //@include toRem(width, 400);
  //
  #section0{
    height: 100vh;
    background-color: #000000;
    background-size: cover;
    position: relative;
    width: 100%;
    overflow: hidden;
    .section0_text-box{
      position: absolute;
      @include toRem(top, 500);
      @include toRem(left, 100);
      transform: translate(0, -50%);
      width: auto;
      .text-list{
        li{
          @include toRem(font-size, 220);
          @include toRem( letter-spacing, 1.5);
          font-family: 'Anton', sans-serif;
          font-weight: bold;
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
          font-weight: normal;
          @include toRem( line-height, 30 );
          font-family: 'Noto Sans KR';
      }
    }

  }

</style>