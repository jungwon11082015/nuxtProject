<template>
    <main>
        <div class="container">
            <div class="row">
                <h1>안녕하세요 <span>&#9996;</span></h1>
                <h2>저는 당신과 함께할 준비가 되어있습니다.</h2>
            </div>
            <div class="row">
                <h4 style="text-align:center">무엇을 도와드릴까요? 도움이 필요하신 내용이나 궁금하신 사항을 상세히 알려주세요.</h4>
            </div>
            <div class="row input-container">
                <div class="col-xs-12">
                    <div class="styled-input wide">
                        <input type="text" required />
                        <label>Name</label> 
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="styled-input">
                        <input type="text" required />
                        <label>Email</label> 
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="styled-input" style="float:right;">
                        <input type="text" required />
                        <label>Phone Number</label> 
                    </div>
                </div>
                <div class="col-xs-12">
                    <div class="styled-input wide">
                        <textarea required></textarea>
                        <label>Message</label>
                    </div>
                </div>
                <div class="col-xs-12">
                    <div class="btn-lrg submit-btn">Send Message</div>
                </div>
            </div>
        </div>
    </main>
</template> 

<script>
    import Mixin from '../plugins/MyMixin.js'
    import {gsap, power2, power3, power4, elastic  } from "gsap";
    export default {
        data(){
            return {
               intervalInIt: '',
            }
        }, 
        beforeDestroy () {
            console.log( "beforeDestroy" );
        },

        beforeCreate(){
            console.log( "beforeCreate" );
        },

        created(){
            console.log( "created" );
        },
        mounted(){

            this.$nextTick( function(){
            });
        },
        
        methods:{
        
        },
    }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/reset"; 
  @import "~assets/scss/function";
  //사용법
      //@include toRem(width, 400);
  //
  main{
    @include toRem(padding-top, 240);
    @include toRem(padding-bottom, 130);
    background: #000;
    .container{ overflow: hidden;
       h1 {
            font-weight: 600;
            @include toRem( font-size, 40 );
            color: #fff;
            text-align: center;
            span{ color: orange;}
            font-family: 'Noto Sans KR';
        
        }
       h2{ 
            @include toRem( margin-top, 20 );
            color: #fff; 
            @include toRem( font-size, 30 );
            text-align: center;
            font-family: 'Noto Sans KR';
       }
    }
  }
    body {
        background-color: #444442;
        padding-top: 85px;
    }

 

    h4 {
        font-family: 'Roboto', sans-serif, 'arial';
        font-weight: 400;
        font-size: 20px;
        color: #9b9b9b;
        line-height: 1.5;
    }

    /* ///// inputs /////*/

    input:focus ~ label, textarea:focus ~ label, input:valid ~ label, textarea:valid ~ label {
        font-size: 0.75em;
        color: #999;
        top: -5px;
        -webkit-transition: all 0.225s ease;
        transition: all 0.225s ease;
    }

    .styled-input {
        float: left;
        width: 293px;
        margin: 1rem 0;
        position: relative;
        border-radius: 4px;
    }

    @media only screen and (max-width: 768px){
        .styled-input {
            width:100%;
        }
    }

    .styled-input label {
        color: #999;
        padding: 1.3rem 30px 1rem 30px;
        position: absolute;
        top: 10px;
        left: 0;
        -webkit-transition: all 0.25s ease;
        transition: all 0.25s ease;
        pointer-events: none;
    }

    .styled-input.wide { 
        width: 650px;
        max-width: 100%;
    }

    input,
    textarea {
        padding: 30px;
        border: 0;
        width: 100%;
        font-size: 1rem;
        background-color: #2d2d2d;
        color: white;
        border-radius: 4px;
    }

    input:focus,
    textarea:focus { outline: 0; }

    input:focus ~ span,
    textarea:focus ~ span {
        width: 100%;
        -webkit-transition: all 0.075s ease;
        transition: all 0.075s ease;
    }

    textarea {
        width: 100%;
        min-height: 15em;
    }

    .input-container {
        width: 650px;
        max-width: 100%;
        margin: 0 auto;
    }

    .submit-btn {
        float: right;
        padding: 7px 35px;
        border-radius: 60px;
        display: inline-block;
        background-color: #4b8cfb;
        color: white;
        font-size: 18px;
        cursor: pointer;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.06),
                0 2px 10px 0 rgba(0,0,0,0.07);
        -webkit-transition: all 300ms ease;
        transition: all 300ms ease;
    }

    .submit-btn:hover {
        transform: translateY(1px);
        box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10),
                0 1px 1px 0 rgba(0,0,0,0.09);
    }

    @media (max-width: 768px) {
        .submit-btn {
            width:100%;
            float: none;
            text-align:center;
        }
    }

    input[type=checkbox] + label {
    color: #ccc;
    font-style: italic;
    } 

    input[type=checkbox]:checked + label {
    color: #f00;
    font-style: normal;
    }

</style>